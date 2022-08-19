import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './homePage.module.css';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Rhys.fyi</title>
			</Head>

			<div className={styles.main}>
				<h1 className={styles.title}>Rhys.fyi</h1>

				<div className={styles.linksContainer}>
					<h2 className={styles.linksTitle}>Links</h2>

					<Link href="/chemEngDesignTools">
						<a className={styles.link}>Chem Eng Design Tools</a>
					</Link>

					<Link href="/reviews">
						<a className={styles.link}>Reviews App</a>
					</Link>
					<Link href="/comments">
						<a className={styles.link}>Comments</a>
					</Link>
					<Link href="/protected">
						<a className={styles.link}>Protected page</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
