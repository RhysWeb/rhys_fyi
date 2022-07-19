import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
	// const { data, isLoading } = trpc.useQuery([
	// 	'example.hello',
	// 	{ text: 'from tRPC' },
	// ]);
	const { data, isLoading } = trpc.useQuery(['star.getAll']);

	return (
		<div className={styles.container}>
			<Head>
				<title>Chem Eng</title>
				<meta name="Main page" content="Chemical engineering helper tools" />
				<link rel="icon" href="/favicon.ico" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<div>
				<main className={styles.main}>
					<h1 className={styles.title}>Hello</h1>

					<div className={styles.linksContainer}>
						<h2>Links</h2>
						<Link href="/GasConvert">
							<a className={styles.link}>Gas conversion</a>
						</Link>

						<Link href="/comments">
							<a className={styles.link}>Leave a comment</a>
						</Link>
					</div>
					{data ? (
						<p>{`Database Test: ${data[0]?.name} ${data[0]?.constellation}`}</p>
					) : (
						<p>Database Test: Loading...</p>
					)}
					{/* <a href="/GasConvert" target="_blank" rel="noreferrer">
						TypeScript
					</a> */}
				</main>
			</div>
		</div>
	);
};

export default Home;
