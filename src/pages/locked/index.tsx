import type { NextPage } from 'next';
import { ContainerOne } from '../../components/ContainerOne/ContainerOne';
import styles from './lockedPage.module.css';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';
import ButtonOne from '../../components/ButtonOne/ButtonOne';

const Contents = () => {
	const { data } = useSession();

	if (!data)
		return (
			<div className={`${styles.flexCenter} ${styles.topGap}`}>
				<p className={styles.signInText}>This is a protected page.</p>
				<p className={styles.signInText}>To view please log in.</p>

				<ButtonOne
					margin="3rem 0 0 0"
					text="Sign in with Github"
					onClick={() => signIn('github')}
				/>
			</div>
		);

	if (data.user?.name === 'RhysWeb')
		return (
			<div>
				<div className={styles.main}>
					<h1 className={styles.title}>Rhys only page</h1>
					<p>
						{/* {data.user?.image && <img src={data.user?.image} alt="pro pic" />} */}
						You are logged in via Github and your username is{' '}
						<b>{data.user?.name}</b>
					</p>

					<ButtonOne
						text="Sign out"
						onClick={() => signOut()}
						margin="3rem 0 0 0"
					/>
				</div>
			</div>
		);

	return (
		<div>
			<div className={styles.main}>
				<h1 className={styles.title}>This isnt for you</h1>
				<p>
					{/* {data.user?.image && <img src={data.user?.image} alt="pro pic" />} */}
					Hi <b>{data.user?.name}</b>. This page is not for you. Please log out.
				</p>

				<ButtonOne
					text="Sign out"
					onClick={() => signOut()}
					margin="3rem 0 0 0"
				/>
			</div>
		</div>
	);
};

const Locked: NextPage = ({}) => {
	return (
		<ContainerOne>
			<Head>
				<title>Chem Eng Home</title>
			</Head>

			<Contents />
		</ContainerOne>
	);
};

export default Locked;
