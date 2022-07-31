import type { NextPage } from 'next';
import Link from 'next/link';
import { ContainerOne } from '../../components/ContainerOne/ContainerOne';
import styles from './protectedPage.module.css';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';

const HomeContents = () => {
	const { data } = useSession();

	if (!data)
		return (
			<div>
				<div>Please log in below</div>
				<div />
				<button onClick={() => signIn('github')}>
					<span>Sign in with Github</span>
				</button>
			</div>
		);

	return (
		<div>
			<div className={styles.main}>
				<h1 className={styles.title}>Protected Page</h1>
				<p>
					{/* {data.user?.image && <img src={data.user?.image} alt="pro pic" />} */}
					Name: {data.user?.name}
				</p>

				<button onClick={() => signOut()}>Sign out</button>

				<div className={styles.linksContainer}>
					<h2 className={styles.linksTitle}>Links</h2>

					<Link href="/gases">
						<a className={styles.link}>Gas Conversion</a>
					</Link>
					<Link href="/comments">
						<a className={styles.link}>Comments</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

const Protected: NextPage = ({}) => {
	return (
		<ContainerOne>
			<Head>
				<title>Chem Eng Home</title>
			</Head>

			<HomeContents />
		</ContainerOne>
	);
};

export default Protected;
