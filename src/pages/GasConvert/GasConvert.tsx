import Head from 'next/head';
import styles from './GasConvert.module.css';

export default function GasConvert() {
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
					<div className={styles.cellsGridContainer}>
						<div className={styles.gridHeader}>Initial conditions</div>
						<label className={styles.gridItem} htmlFor="flowrate">
							Flowrate:{' '}
						</label>
						<input
							name="flowrate"
							type="text"
							placeholder="flowrate"
							className={styles.gridItem}
						/>
						<select
							className={styles.gridItem}
							name="flowrateUnit"
							id="flowrateUnit"
						>
							<option value="litres/sec">litres/sec</option>
							<option value="litres/min">litres/min</option>
							<option value="litres/hour">litres/hour</option>
							<option value="m3/sec">m3/sec</option>
							<option value="m3/min">m3/min</option>
							<option value="m3/hour">m3/hour</option>
						</select>

						<label className={styles.gridItem} htmlFor="temperature">
							Temperature:{' '}
						</label>
						<input
							name="temperature"
							type="text"
							placeholder="temperature"
							className={styles.gridItem}
						/>
						<select
							className={styles.gridItem}
							name="temperatureUnit"
							id="temperatureUnit"
						>
							<option value="K">K</option>
							<option value="℃">℃</option>
						</select>
						<label className={styles.gridItem} htmlFor="pressure">
							Pressure:{' '}
						</label>
						<input
							name="pressure"
							type="text"
							placeholder="pressure"
							className={styles.gridItem}
						/>
						<select
							className={styles.gridItem}
							name="pressureUnit"
							id="pressureUnit"
						>
							<option value="barG">barG</option>
							<option value="barA">barA</option>
							<option value="Pa">Pa</option>
							<option value="kPa">kPa</option>
							<option value="mmH2O">mmH2O</option>
						</select>
						<div className={styles.gridHeader}>Final conditions</div>
						<label className={styles.gridItem} htmlFor="flowrate">
							Flowrate:{' '}
						</label>
						<input
							name="flowrate"
							type="text"
							placeholder="flowrate"
							className={styles.gridItem}
						/>
						<select
							className={styles.gridItem}
							name="flowrateUnit"
							id="flowrateUnit"
						>
							<option value="litres/sec">litres/sec</option>
							<option value="litres/min">litres/min</option>
							<option value="litres/hour">litres/hour</option>
							<option value="m3/sec">m3/sec</option>
							<option value="m3/min">m3/min</option>
							<option value="m3/hour">m3/hour</option>
						</select>

						<label className={styles.gridItem} htmlFor="temperature">
							Temperature:{' '}
						</label>
						<input
							name="temperature"
							type="text"
							placeholder="temperature"
							className={styles.gridItem}
						/>
						<select
							className={styles.gridItem}
							name="temperatureUnit"
							id="temperatureUnit"
						>
							<option value="K">K</option>
							<option value="℃">℃</option>
						</select>
						<label className={styles.gridItem} htmlFor="pressure">
							Pressure:{' '}
						</label>
						<input
							name="pressure"
							type="text"
							placeholder="pressure"
							className={styles.gridItem}
						/>
						<select
							className={styles.gridItem}
							name="pressureUnit"
							id="pressureUnit"
						>
							<option value="barG">barG</option>
							<option value="barA">barA</option>
							<option value="Pa">Pa</option>
							<option value="kPa">kPa</option>
							<option value="mmH2O">mmH2O</option>
						</select>
						{/* <h2 className={styles.gridHeader}>Gas Convert</h2>

						<label htmlFor="flowrate">Flowrate: </label>
						<input name="flowrate" type="text" placeholder="flowrate" />
						<select name="cars" id="cars">
							<option value="litres/sec">litres/sec</option>
							<option value="litres/min">litres/min</option>
							<option value="litres/hour">litres/hour</option>
							<option value="m3/sec">m3/sec</option>
							<option value="m3/min">m3/min</option>
							<option value="m3/hour">m3/hour</option>
						</select>
						<div>
							<label htmlFor="pressure">Pressure: </label>
							<input name="pressure" type="text" placeholder="pressure" />
							<input
								name="pressureUnits"
								type="select"
								placeholder="pressure"
							/>
						</div>
						<div>
							<label htmlFor="temperature">Temperature: </label>
							<input name="temperature" type="text" placeholder="temperature" />
							<input
								name="temperatureUnits"
								type="select"
								placeholder="temperature"
							/>
						</div> */}
					</div>
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
