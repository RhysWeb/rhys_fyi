import type { NextPage } from 'next';
import styles from './reviewsPage.module.css';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';
import ButtonOne from '../../components/ButtonOne/ButtonOne';
import { useRouter } from 'next/router';

const Reviews: NextPage = ({}) => {
	return (
		<>
			<Head>
				<title>Reviews</title>
			</Head>

			<div className={styles.friends}></div>
		</>
	);
};

export default Reviews;
