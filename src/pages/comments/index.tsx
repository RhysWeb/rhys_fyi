import Head from 'next/head';
import { trpc } from '../../utils/trpc';
import { Comment } from '../../components/Comment/Comment';
import { useState } from 'react';
import { NewCommentForm } from '../../components/NewCommentForm/NewCommentForm';
import styles from './commentsPage.module.css';
import { ContainerOne } from '../../components/ContainerOne/ContainerOne';

const CommentsPage = () => {
	const [newComment, setNewComment] = useState(false);
	const { data, refetch } = trpc.useQuery(['comment.getAll']);

	return (
		<ContainerOne>
			<Head>
				<title>CE - Comments</title>
			</Head>

			<div className={styles.main}>
				<button
					className={styles.button}
					onClick={() => {
						setNewComment(!newComment);
					}}
				>
					New comment
				</button>
				{newComment && (
					<NewCommentForm refetch={refetch} setNewComment={setNewComment} />
				)}
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
			</div>
		</ContainerOne>
	);
};

export default CommentsPage;
