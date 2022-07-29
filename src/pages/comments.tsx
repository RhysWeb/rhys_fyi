import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { Comment } from '../components/Comment';
import { useState } from 'react';
import { NewCommentForm } from '../components/NewCommentForm';
import styled from 'styled-components';

//Styled Components
const PageContainer = styled.div`
	padding: 0 2rem;
`;

const Main = styled.div`
	min-height: 100vh;
	padding: 4rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	--cellHeight: 1.8rem;
	--cellWidth: 7rem;
`;

const CommentsPage = () => {
	const [newComment, setNewComment] = useState(false);

	const { data, refetch } = trpc.useQuery(['comment.getAll']);
	return (
		<PageContainer>
			<Head>
				<title>Comments</title>
				<meta name="Comments" content="a place to record comments" />
			</Head>

			<Main>
				<button
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
			</Main>
		</PageContainer>
	);
};

export default CommentsPage;
