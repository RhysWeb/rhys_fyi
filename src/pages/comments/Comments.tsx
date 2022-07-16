import Head from 'next/head';
import { trpc } from '../../utils/trpc';
import { Comment } from '../../components/Comment/Comment';

import styles from './comments.module.css';

export default function GasConvert() {
	const { data } = trpc.useQuery(['comment.getAll']);
	return (
		<div className={styles.container}>
			<Head>
				<title>Comments</title>
				<meta name="Comments" content="a place to record comments" />
			</Head>
			<div>
				<main className={styles.main}>
					<button>Add a comment</button>
					{data ? (
						data.map((comment) => (
							<Comment
								key={comment.id}
								author={comment.author}
								text={comment.text}
								createdAt={comment.createdAt}
							/>
						))
					) : (
						<p>Loading..</p>
					)}
				</main>
			</div>
		</div>
	);
}
