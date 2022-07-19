import Head from 'next/head';
import { trpc } from '../../utils/trpc';
import { Comment } from '../../components/Comment/Comment';

import styles from './comments.module.css';
import { useState } from 'react';
import { NewCommentForm } from '../../components/NewCommentForm';

export default function Comments() {
	const [newComment, setNewComment] = useState(false);
	const { data } = trpc.useQuery(['comment.getAll']);
	const commentMutation = trpc.useMutation(['comment.addComment']);
	return (
		<div className={styles.container}>
			<Head>
				<title>Comments</title>
				<meta name="Comments" content="a place to record comments" />
			</Head>
			<div>
				<main className={styles.main}>
					<button
						onClick={() => {
							setNewComment(!newComment);
						}}
					>
						New comment
					</button>
					{newComment && <NewCommentForm />}
					{data ? (
						data.map((comment) => (
							<div key={comment.id}>
								<Comment
									author={comment.author}
									text={comment.text}
									createdAt={comment.createdAt}
								/>
							</div>
						))
					) : (
						<p>Loading..</p>
					)}
				</main>
			</div>
		</div>
	);
}
