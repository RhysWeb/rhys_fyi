import Head from 'next/head';
import { trpc } from '../../utils/trpc';
import { Comment } from '../../components/Comment/Comment';
import { useState } from 'react';
import { NewCommentForm } from '../../components/NewCommentForm/NewCommentForm';
import styles from './commentsPage.module.css';
import ButtonOne from '../../components/ButtonOne/ButtonOne';

const CommentsPage = () => {
	const [newComment, setNewComment] = useState(false);
	const { data, refetch } = trpc.useQuery(['comment.getAll']);

	function toggleNewComment() {
		setNewComment(!newComment);
	}
	return (
		<>
			<Head>
				<title>CE - Comments</title>
			</Head>

			<div className={styles.main}>
				<ButtonOne
					text="New comment"
					onClick={toggleNewComment}
					margin="1rem 0 2rem 0"
				/>

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
		</>
	);
};

export default CommentsPage;
