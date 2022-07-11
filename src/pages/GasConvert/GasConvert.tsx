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
					<div className={styles.linksContainer}>
						<h2>Gas Convert</h2>
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
