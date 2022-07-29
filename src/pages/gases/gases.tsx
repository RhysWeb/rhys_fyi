import Head from 'next/head';
import { useForm } from 'react-hook-form';
import styles from './gases.module.css';
import { FlowOutput } from '../../components/FlowOutput';

let PressureUnitOptions = (
	<>
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
	</>
);

let flowUnitOptions = (
	<>
		<option value="L/min">litres/min</option>
		<option value="L/s">litres/sec</option>
		<option value="L/h">litres/hour</option>
		<option value="m3/s">m3/sec</option>
		<option value="m3/min">m3/min</option>
		<option value="m3/h">m3/hour</option>
	</>
);

let TemperatureUnitOptions = (
	<>
		<option value="C">℃</option>
		<option value="K">K</option>
		<option value="F">F</option>
	</>
);

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

export default function Gases() {
	const { register, control } = useForm<FormValues>({
		defaultValues: {
			inTemp: 0,
			inPres: 2,
			inFlow: 100,
			outTemp: 15,
			outPres: 0,
			outFlowUnit: 'L/min',
			outPresUnit: 'barG',
			inTempUnit: 'C',
			inPresUnit: 'barG',
			inFlowUnit: 'L/min',
			outTempUnit: 'C',
		},
	});

	return (
		<div className={styles.pageContainer}>
			<Head>
				<title>Convert Gas</title>
				<meta
					name="Flowrate converter"
					content="An app for converting gas flowrates based on temp pressure and units"
				/>
			</Head>

			<div className={styles.main}>
				<form className={styles.form}>
					<div className={styles.header}>Initial conditions</div>

					<label className={styles.label} htmlFor="inTemp">
						Temperature:{' '}
					</label>
					<input
						className={styles.input}
						{...register('inTemp')}
						type="number"
					/>
					<select {...register('inTempUnit')} id="temperatureUnit">
						{TemperatureUnitOptions}
					</select>

					<label className={styles.label} htmlFor="inPres">
						Pressure:{' '}
					</label>
					<input
						className={styles.input}
						{...register('inPres')}
						type="number"
					/>
					<select {...register('inPresUnit')} id="inPresUnit">
						{PressureUnitOptions}
					</select>

					<label className={styles.label} htmlFor="inFlow">
						Flowrate:{' '}
					</label>
					<input
						className={styles.input}
						{...register('inFlow')}
						type="number"
					/>
					<select {...register('inFlowUnit')} id="inFlowUnit">
						{flowUnitOptions}
					</select>
					<div className={styles.header}>Final conditions</div>

					<label className={styles.label} htmlFor="outTemp">
						Temperature:{' '}
					</label>
					<input
						className={styles.input}
						{...register('outTemp')}
						type="number"
					/>
					<select {...register('outTempUnit')} id="outTempUnit">
						{TemperatureUnitOptions}
					</select>

					<label className={styles.label} htmlFor="outPres">
						Pressure:{' '}
					</label>
					<input
						className={styles.input}
						{...register('outPres')}
						type="number"
					/>
					<select {...register('outPresUnit')} id="outPresUnit">
						{PressureUnitOptions}
					</select>

					<label className={styles.lable} htmlFor="outputFlowrate">
						Flowrate:{' '}
					</label>
					<FlowOutput control={control} />

					<select {...register('outFlowUnit')} id="outFlowUnit">
						{flowUnitOptions}
					</select>
				</form>
			</div>
		</div>
	);
}
