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

export {
	convertTempToKelvin,
	convertPressureToPaAbs,
	convertFlowToLitersPerMin,
	convertFlowFromLitersPerMinTo,
};
