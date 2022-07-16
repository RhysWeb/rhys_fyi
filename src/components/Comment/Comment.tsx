import styles from './comment.module.css';
import { format } from 'date-fns';

interface Props {
	author: string;
	text: string;
	key: number;
	createdAt: Date;
}

export const Comment: React.FC<Props> = ({ author, key, text, createdAt }) => {
	return (
		<div className={styles.card} key={key}>
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
