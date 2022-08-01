import type { NextPage } from 'next';
import Link from 'next/link';
import { ContainerHome } from '../../components/ContainerHome/ContainerHome';
import styles from './homePage.module.css';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<ContainerHome>
			<Head>
				<title>Chem Eng Home</title>
			</Head>

			<div className={styles.main}>
				<h1 className={styles.title}>Chem Eng Tools</h1>

				<div className={styles.linksContainer}>
					<h2 className={styles.linksTitle}>Links</h2>

					<Link href="/gases">
						<a className={styles.link}>Gas Conversion</a>
					</Link>
					<Link href="/comments">
						<a className={styles.link}>Comments</a>
					</Link>
					<Link href="/protected">
						<a className={styles.link}>Protected page</a>
					</Link>
				</div>
			</div>
		</ContainerHome>
	);
};

export default Home;
