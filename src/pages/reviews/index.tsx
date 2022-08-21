import type { NextPage } from 'next';
import styles from './reviewsPage.module.css';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';
import ButtonOne from '../../components/ButtonOne/ButtonOne';
import ButtonTwo from '../../components/ButtonTwo/ButtonTwo';
import { trpc } from '../../utils/trpc';
import { useRouter } from 'next/router';
import { NotSignedIn } from '../../components/NotSignedInContent/NotSignedIn';
import { Loading } from '../../components/Loading/Loading';
import { ReviewsHomePage } from '../../components/ReviewsHomePage/ReviewsHomePage';
import { reviewsUserRouter } from '../../server/router/reviewsUser';

// @ts-ignore
const Contents: React.FC<Props> = ({ session }) => {
	const router = useRouter();

	const { data, isLoading } = trpc.useQuery([
		'reviewsUser.getUser',
		{ userId: session?.user?.id },
	]);
	if (isLoading) return <Loading />;
	if (!data) router.push('/reviews/createUser');

	// If we have session and the session userid is in our validated users db then the homepage is shown below
	if (data)
		return (
			<div className={`${styles.flexCenter} ${styles.topGap}`}>
				<ReviewsHomePage user={data} />
				<p>
					You are signed in with google and you already have a REVIEWS account.
				</p>

				<p>data: {JSON.stringify(data)}</p>

				<ButtonTwo
					text="Sign out of Google"
					onClick={() => {
						signOut();
					}}
					margin="3rem 0 0 0"
				/>
			</div>
		);

	return <Loading />;
};

const ReviewsCreateUserPage: NextPage = ({}) => {
	const { data: session, status } = useSession();

	return (
		<>
			<Head>
				<title>Reviews</title>
			</Head>
			{status === 'loading' ? (
				<Loading />
			) : session ? (
				<Contents session={session} />
			) : (
				<NotSignedIn />
			)}
		</>
	);
};

export default ReviewsCreateUserPage;
