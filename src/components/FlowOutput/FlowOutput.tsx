import styles from '../../styles/gasconvert.module.css';
import { useWatch, Control } from 'react-hook-form';
import {
	convertTempToKelvin,
	convertPressureToPaAbs,
	convertFlowToLitersPerMin,
	convertFlowFromLitersPerMinTo,
} from '../../utils/pressureAndTempFunctions';

export type FormValues = {
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

export function FlowOutput({ control }: { control: Control<FormValues> }) {
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

	return (
		<input className={styles.outputStyled} value={Q2} type="text" readOnly />
	);
}
