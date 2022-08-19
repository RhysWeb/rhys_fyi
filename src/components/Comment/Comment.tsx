import { format } from 'date-fns';
import styles from './Comment.module.css';

interface Props {
	author: string;
	text: string;
	createdAt: Date;
}

export const Comment: React.FC<Props> = ({ author, text, createdAt }) => {
	return (
		<div className={styles.card}>
			<div className={styles.topRow}>
				<p className={styles.name}>{`- ${author}`}</p>
				<p className={styles.date}>
					{format(createdAt, "d MMM yyyy 'at' h:mm bb")}
				</p>
			</div>
			<div className={styles.content}>{text}</div>
		</div>
	);
};
