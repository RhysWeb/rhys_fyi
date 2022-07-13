import Head from 'next/head';

import styles from './GasConvert.module.css';
import { useForm, useWatch, Control } from 'react-hook-form';

function convertTempToKelvin(temp: number, unit: string): number {
	if (unit === 'C') {
		return temp + 273.15;
	} else if (unit === 'F') {
		return ((temp + 459.67) * 5) / 9;
	} else {
		return temp;
	}
}

function convertPressureToPaAbs(pressure: number, unit: string): number {
	//convert pressure to Pa absolute
	let PaAbs: number = 1;
	switch (unit) {
		case 'barG':
			PaAbs = pressure * 100000 + 101325;
			break;
		case 'barA':
			PaAbs = pressure * 100000;
			break;
		case 'PaG':
			PaAbs = pressure + 101325;
			break;
		case 'PaA':
			PaAbs = pressure;
			break;
		case 'psiA':
			PaAbs = pressure * 6894.76;
			break;
		case 'psiG':
			PaAbs = pressure * 6894.76 + 101325;
			break;
		case 'mmH20A':
			PaAbs = pressure * 133.322;
			break;
		case 'mmH20G':
			PaAbs = pressure * 133.322 + 101325;
			break;
		case 'atmA':
			PaAbs = pressure * 101325;
			break;
		case 'atmG':
			PaAbs = pressure * 101325 + 101325;
			break;
		case 'KPaA':
			PaAbs = pressure * 1000;
			break;
		case 'KPaG':
			PaAbs = pressure * 1000 + 101325;
			break;
	}
	return PaAbs;
}

function convertFlowToLitersPerMin(flow: number, unit: string): number {
	//convert flow to L/min
	let Lpm: number = 1;
	switch (unit) {
		case 'L/min':
			Lpm = flow;
			break;
		case 'm3/min':
			Lpm = flow * 1000;
			break;
		case 'm3/s':
			Lpm = flow * 1000 * 60;
			break;
		case 'm3/h':
			Lpm = flow * 1000 * 60 * 60;
			break;
		case 'L/h':
			Lpm = flow / 60;
			break;
		case 'L/s':
			Lpm = flow * 60;
			break;
	}
	return Lpm;
}

function convertFlowFromLitersPerMinTo(flow: number, unit: string): number {
	//convert flow from L/min to specified unit
	let outFlow: number = 1;
	switch (unit) {
		case 'L/min':
			outFlow = flow;
			break;
		case 'm3/min':
			outFlow = flow / 1000;
			break;
		case 'm3/s':
			outFlow = flow / 1000 / 60;
			break;
		case 'm3/h':
			outFlow = (flow / 1000) * 60;
			break;
		case 'L/h':
			outFlow = flow * 60;
			break;
		case 'L/s':
			outFlow = flow / 60;
			break;
	}
	return outFlow;
}

type FormValues = {
	inTemp: number;
	inTempUnit: string;
	inPres: number;
	inPresUnit: string;
	inFlow: number;
	inFlowUnit: string;
	outTemp: number;
	outTempUnit: string;
	outPres: number;
	outPresUnit: string;
	outFlow: number;
	outFlowUnit: string;
};

function Output({ control }: { control: Control<FormValues> }) {
	const inTemp = useWatch({ control, name: 'inTemp' });
	const inTempUnit = useWatch({ control, name: 'inTempUnit' });
	const inPres = useWatch({ control, name: 'inPres' });
	const inPresUnit = useWatch({ control, name: 'inPresUnit' });
	const inFlow = useWatch({ control, name: 'inFlow' });
	const inFlowUnit = useWatch({ control, name: 'inFlowUnit' });
	const outTemp = useWatch({ control, name: 'outTemp' });
	const outTempUnit = useWatch({ control, name: 'outTempUnit' });
	const outPres = useWatch({ control, name: 'outPres' });
	const outPresUnit = useWatch({ control, name: 'outPresUnit' });
	const outFlowUnit = useWatch({ control, name: 'outFlowUnit' });

	let T1 = convertTempToKelvin(inTemp, inTempUnit);
	let P1 = convertPressureToPaAbs(inPres, inPresUnit);
	let T2 = convertTempToKelvin(outTemp, outTempUnit);
	let P2 = convertPressureToPaAbs(outPres, outPresUnit);
	let Q1 = convertFlowToLitersPerMin(inFlow, inFlowUnit);
	let Q2inLitresPerMin = (P1 * Q1 * T2) / (T1 * P2); //Q2 in L/min
	let Q2 = convertFlowFromLitersPerMinTo(Q2inLitresPerMin, outFlowUnit);
	return <input value={Q2} type="text" className={styles.output} />;
	// return <div style={{ color: 'blue' }}>{result}</div>;
}

export default function GasConvert() {
	const { register, control } = useForm<FormValues>();

	return (
		<div className={styles.container}>
			<Head>
				<title>Convert Gas</title>
				<meta
					name="description"
					content="An app for converting gas flowrates based on temp pressure and units"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<main className={styles.main}>
					<form className={styles.cellsGridContainer}>
						<div className={styles.gridHeader}>Initial conditions</div>

						<label className={styles.label} htmlFor="temperature">
							Temperature:{' '}
						</label>
						<input
							{...register('inTemp')}
							type="text"
							className={styles.input}
						/>
						<select
							{...register('inTempUnit')}
							className={styles.gridItem}
							id="temperatureUnit"
						>
							<option value="K">K</option>
							<option value="C">℃</option>
							<option value="F">F</option>
						</select>

						<label className={styles.label} htmlFor="pressure">
							Pressure:{' '}
						</label>
						<input
							{...register('inPres')}
							type="text"
							className={styles.input}
						/>
						<select
							className={styles.gridItem}
							{...register('inPresUnit')}
							id="inPresUnit"
						>
							<option value="barG">barG</option>
							<option value="barA">barA</option>
							<option value="PaG">Pa gauge</option>
							<option value="PaA">Pa abs</option>
							<option value="psiG">psi gauge</option>
							<option value="psiA">psi abs</option>
							<option value="kPaG">kPa gauge</option>
							<option value="kPaA">kPa abs</option>
							<option value="mmH2OA">mmH2O abs</option>
							<option value="mmH2OG">mmH2O gauge</option>
							<option value="atmG">atm gauge </option>
							<option value="atmA">atm abs</option>
						</select>

						<label className={styles.label} htmlFor="flowrate">
							Flowrate:{' '}
						</label>
						<input
							{...register('inFlow')}
							type="text"
							className={styles.input}
						/>
						<select
							className={styles.gridItem}
							{...register('inFlowUnit')}
							id="inFlowUnit"
						>
							<option value="L/s">litres/sec</option>
							<option value="L/min">litres/min</option>
							<option value="L/h">litres/hour</option>
							<option value="m3/s">m3/sec</option>
							<option value="m3/min">m3/min</option>
							<option value="m3/h">m3/hour</option>
						</select>
						<div className={`${styles.gridHeader} ${styles.tableHeader}`}>
							Final conditions
						</div>

						<label className={styles.label} htmlFor="temperature">
							Temperature:{' '}
						</label>
						<input
							{...register('outTemp')}
							type="text"
							className={styles.input}
						/>
						<select
							className={styles.gridItem}
							{...register('outTempUnit')}
							id="outTempUnit"
						>
							<option value="K">K</option>
							<option value="C">℃</option>
							<option value="F">F</option>
						</select>
						<label className={styles.label} htmlFor="pressure">
							Pressure:{' '}
						</label>
						<input
							{...register('outPres')}
							type="text"
							className={styles.input}
						/>
						<select
							className={styles.gridItem}
							{...register('outPresUnit')}
							id="outPresUnit"
						>
							<option value="barG">barG</option>
							<option value="barA">barA</option>
							<option value="PaG">Pa gauge</option>
							<option value="PaA">Pa abs</option>
							<option value="kPaG">kPa gauge</option>
							<option value="kPaA">kPa abs</option>
							<option value="mmH2OA">mmH2O abs</option>
							<option value="mmH2OG">mmH2O gauge</option>
						</select>
						<label className={styles.label} htmlFor="outputFlowrate">
							Flowrate:{' '}
						</label>
						<Output control={control} />

						<select
							className={styles.gridItem}
							{...register('outFlowUnit')}
							id="outFlowUnit"
						>
							<option value="L/s">litres/sec</option>
							<option value="L/min">litres/min</option>
							<option value="L/h">litres/hour</option>
							<option value="m3/s">m3/sec</option>
							<option value="m3/min">m3/min</option>
							<option value="m3/h">m3/hour</option>
						</select>
					</form>
				</main>
			</div>
		</div>

		// <div>
		// 	<h1>Gas Convert</h1>
		// 	<p>
		// 		<input
		// 			type="text"
		// 			placeholder="Enter the amount of gas you want to convert"
		// 		/>
		// 	</p>
		// 	<p>
		// 		<input
		// 			type="text"
		// 			placeholder="Enter the unit of gas you want to convert"
		// 		/>
		// 	</p>
		// 	<p>
		// 		<input
		// 			type="text"
		// 			placeholder="Enter the unit of gas you want to convert to"
		// 		/>
		// 	</p>
		// </div>
	);
}
