import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	// const { data, isLoading } = trpc.useQuery([
	// 	'example.hello',
	// 	{ text: 'from tRPC' },
	// ]);
	const { data, isLoading } = trpc.useQuery(['star.getAll']);

	return (
		<>
			<Head>
				<title>Chem Eng</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<main className={styles.main}>
					<h1 className={styles.title}>Hello</h1>
					<div>
						{data ? (
							<a
								href="/GasConvert"
								target="_blank"
								rel="noreferrer"
							>{`${data[0]?.name} ${data[0]?.constellation}`}</a>
						) : (
							<p>Loading..</p>
						)}
					</div>
					{/* <a href="/GasConvert" target="_blank" rel="noreferrer">
						TypeScript
					</a> */}
				</main>
			</div>
		</>
	);
};

export default Home;
