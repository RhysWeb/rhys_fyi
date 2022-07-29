import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.pageContainer}>
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

			<div className={styles.main}>
				<h1 className={styles.title}>Hello</h1>

				<div className={styles.linksContainer}>
					<h2 className={styles.linksTitle}>Links</h2>
					<Link href="/gasconvert">
						<a className={styles.link}>Gas conversion</a>
					</Link>

					<Link href="/comments">
						<a className={styles.link}>Comments</a>
					</Link>

					<Link href="/gases">
						<a className={styles.link}>Gases 2</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
