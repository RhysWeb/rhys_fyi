import { format } from 'date-fns';
import styled from 'styled-components';

const Card = styled.div`
	width: clamp(300px, 75vw, 1000px);
	margin-block: 0.5rem;
	padding-inline: 1rem;
	padding-bottom: 1rem;
	border-radius: 0.5rem;
	border: black 1px solid;
`;

const Block = styled.div`
	display: flex;
	flex-direction: row;
`;

const Commentdiv = styled.div`
	display: column;
	flex-direction: row;
`;

const Name = styled.p`
	font-weight: bold;
	margin-left: 0.5rem;
`;

const Content = styled.div`
	font-weight: bold;
`;

const Date = styled.div`
	margin-top: 1rem;
`;

interface Props {
	author: string;
	text: string;
	createdAt: Date;
}

export const Comment: React.FC<Props> = ({ author, text, createdAt }) => {
	return (
		<Card>
			<Block>
				<p>Name:</p>
				<Name>{author}</Name>
			</Block>
			<Commentdiv>
				<Content>{text}</Content>
			</Commentdiv>
			<Commentdiv>
				<Date>{format(createdAt, "d MMM yyyy 'at' h:mm bb")}</Date>
			</Commentdiv>
		</Card>
	);
};
