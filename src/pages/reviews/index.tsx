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
import Image from 'next/image';

// @ts-ignore
const Contents = ({ session }) => {
	// session: {user: {
	//     name?: string | null;
	//     email?: string | null;
	//     image?: string | null;
	//     id: string | null;
	//     role?: enum;}

	// {"user":{"id":"cl72e6nh00006ew6jvo8nhujy","role":"USER","name":"RhysB","email":"rhysbalmforth@gmail.com","image":"https://lh3.googleusercontent.com/a-/AFdZucrXxFLUaiVAseXuINpMzZX30gdDSJqOZdW9c6Y86Dc=s96-c"},"expires":"2022-09-21T21:59:56.077Z"}

	const router = useRouter();

	const { data, isLoading } = trpc.useQuery([
		'reviewsUser.getUser',
		{ userId: session?.user?.id },
	]);
	if (isLoading) return <Loading />;
	if (!data) router.push('/reviews/createUser');
	// data:{"id":2,"authUserId":"cl6msy20u00170gmari8z92j8","createdAt":"2022-08-21T13:49:12.661Z","updatedAt":"2022-08-21T13:49:12.662Z","userName":"Bob"}

	// If we have session and the session userid is in our validated users db then the homepage is shown below
	if (data)
		return (
			<div className={styles.main}>
				<div className={styles.topRow}>
					<div className={styles.nameBadge}>
						<div className={styles.name}>{data.userName}</div>
						<div className={styles.imageContainer}>
							<Image
								src={session.user.image}
								alt="bollocks"
								width={1000}
								height={1000}
								className={styles.icon}
							/>
						</div>
					</div>
					<ButtonTwo
						text="Sign out"
						onClick={() => {
							signOut();
						}}
						margin="3rem 0 0 0"
					/>
				</div>

				<p>data: {JSON.stringify(data)}</p>
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
