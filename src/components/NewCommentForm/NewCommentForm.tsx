import styles from './newCommentForm.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { trpc } from '../../utils/trpc';

type FormValues = {
	text: string;
	author: string;
};

export const NewCommentForm: React.FC = () => {
	const { register, handleSubmit } = useForm<FormValues>();

	const commentMutation = trpc.useMutation(['comment.addComment']);
	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		const commentInDb = await commentMutation.mutate(data);
		// console.log(commentInDb);
	};

	return (
		<form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
			<label className={styles.label} htmlFor="text">
				Comment: <textarea {...register('text')} className={styles.input} />
			</label>
			<br />
			<label className={styles.label} htmlFor="name">
				Name:{' '}
				<input {...register('author')} type="text" className={styles.input} />
			</label>
			<input type="submit" className={styles.submit} value="Submit" />
		</form>
	);
};
