import styles from './comment.module.css';
import { format } from 'date-fns';

interface Props {
	author: string;
	text: string;

	createdAt: Date;
}

export const Comment: React.FC<Props> = ({ author, text, createdAt }) => {
	return (
		<div className={styles.card}>
			<div className={styles.block}>
				<p className={styles.fieldName}>Name:</p>
				<p className={styles.name}>{author}</p>
			</div>
			<div className={styles.commentdiv}>
				<div className={styles.content}>{text}</div>
			</div>
			<div className={styles.commentdiv}>
				<div className={styles.date}>
					{format(createdAt, "d MMM yyyy 'at' h:mm bb")}
				</div>
			</div>
		</div>
	);
};
