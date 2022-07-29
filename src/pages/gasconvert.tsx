import Head from 'next/head';
import { useForm, useWatch, Control } from 'react-hook-form';
import styled from 'styled-components';

//Styled Components
const PageContainer = styled.div`
	padding: 0 2rem;
`;

const Main = styled.div`
	min-height: 100vh;
	padding: 4rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	--cellHeight: 1.8rem;
	--cellWidth: 7rem;
`;

const Form = styled.form`
	display: inline-grid;
	grid-template-columns: auto auto auto;
	margin-block: 1.5rem;
	gap: 5px;
`;

const Header = styled.div`
	grid-column-start: 1;
	grid-column-end: 4;
	text-align: center;
	font-weight: bold;
	margin-block: 2rem 0.5rem;
`;

const Label = styled.label`
	height: var(--cellHeight);
	width: var(--cellWidth);
`;

const Input = styled.input`
	background-color: hsl(114, 69%, 77%);
	height: var(--cellHeight);
	width: var(--cellWidth);
`;

const OutputStyled = styled.input`
	background-color: hsl(60, 93%, 71%);
	height: var(--cellHeight);
	width: var(--cellWidth);
`;

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

function convertTempToKelvin(temp: number, unit: string): number {
	let tempNum = Number(temp);
	if (unit === 'C') {
		return tempNum + 273.15;
	} else if (unit === 'F') {
		return ((tempNum + 459.67) * 5) / 9;
	} else {
		return tempNum;
	}
}

function convertPressureToPaAbs(pressure: number, unit: string): number {
	let pressureNum = Number(pressure);
	//convert pressure to Pa absolute
	if (unit === 'PaA') {
		return pressureNum;
	}
	let PaAbs = pressureNum;
	switch (unit) {
		case 'barG':
			PaAbs = pressureNum * 100000 + 101325;
			break;
		case 'barA':
			PaAbs = pressureNum * 100000;
			break;
		case 'PaG':
			PaAbs = pressureNum + 101325;
			break;
		case 'psiA':
			PaAbs = pressureNum * 6894.76;
			break;
		case 'psiG':
			PaAbs = pressureNum * 6894.76 + 101325;
			break;
		case 'mmH2OA':
			PaAbs = pressureNum * 133.322;
			break;
		case 'mmH2OG':
			PaAbs = pressureNum * 133.322 + 101325;
			break;
		case 'atmA':
			PaAbs = pressureNum * 101325;
			break;
		case 'atmG':
			PaAbs = pressureNum * 101325 + 101325;
			break;
		case 'kPaA':
			PaAbs = pressureNum * 1000;
			break;
		case 'kPaG':
			PaAbs = pressureNum * 1000 + 101325;
			break;
	}
	return PaAbs;
}

function convertFlowToLitersPerMin(flow: number, unit: string): number {
	let flowNum = Number(flow);
	//convert flow to L/min
	let Lpm: number = 1;
	switch (unit) {
		case 'L/min':
			Lpm = flowNum;
			break;
		case 'm3/min':
			Lpm = flowNum * 1000;
			break;
		case 'm3/s':
			Lpm = flowNum * 1000 * 60;
			break;
		case 'm3/h':
			Lpm = (flowNum * 1000) / 60;
			break;
		case 'L/h':
			Lpm = flowNum / 60;
			break;
		case 'L/s':
			Lpm = flowNum * 60;
			break;
	}
	return Lpm;
}

function convertFlowFromLitersPerMinTo(flow: number, unit: string): number {
	let flowNum = Number(flow);
	//convert flow from L/min to specified unit
	let outFlow: number = 1;
	switch (unit) {
		case 'L/min':
			outFlow = flowNum;
			break;
		case 'm3/min':
			outFlow = flowNum / 1000;
			break;
		case 'm3/s':
			outFlow = flowNum / 1000 / 60;
			break;
		case 'm3/h':
			outFlow = (flowNum / 1000) * 60;
			break;
		case 'L/h':
			outFlow = flowNum * 60;
			break;
		case 'L/s':
			outFlow = flowNum / 60;
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
	let Q2 = convertFlowFromLitersPerMinTo(Q2inLitresPerMin, outFlowUnit).toFixed(
		2
	);

	return <OutputStyled value={Q2} type="text" readOnly />;
	// return <div style={{ color: 'blue' }}>{result}</div>;
}

export default function GasConvertPage() {
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
		<PageContainer>
			<Head>
				<title>Convert Gas</title>
				<meta
					name="Flowrate converter"
					content="An app for converting gas flowrates based on temp pressure and units"
				/>
			</Head>

			<Main>
				<Form>
					<Header>Initial conditions</Header>

					<Label htmlFor="inTemp">Temperature: </Label>
					<Input {...register('inTemp')} type="number" />
					<select {...register('inTempUnit')} id="temperatureUnit">
						{TemperatureUnitOptions}
					</select>

					<Label htmlFor="inPres">Pressure: </Label>
					<Input {...register('inPres')} type="number" />
					<select {...register('inPresUnit')} id="inPresUnit">
						{PressureUnitOptions}
					</select>

					<Label htmlFor="inFlow">Flowrate: </Label>
					<Input {...register('inFlow')} type="number" />
					<select {...register('inFlowUnit')} id="inFlowUnit">
						{flowUnitOptions}
					</select>
					<Header>Final conditions</Header>

					<Label htmlFor="outTemp">Temperature: </Label>
					<Input {...register('outTemp')} type="number" />
					<select {...register('outTempUnit')} id="outTempUnit">
						{TemperatureUnitOptions}
					</select>
					<Label htmlFor="outPres">Pressure: </Label>
					<Input {...register('outPres')} type="number" />
					<select {...register('outPresUnit')} id="outPresUnit">
						{PressureUnitOptions}
					</select>
					<Label htmlFor="outputFlowrate">Flowrate: </Label>
					<Output control={control} />

					<select {...register('outFlowUnit')} id="outFlowUnit">
						{flowUnitOptions}
					</select>
				</Form>
			</Main>
		</PageContainer>
	);
}
