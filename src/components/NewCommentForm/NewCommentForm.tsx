import styles from './newCommentForm.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { trpc } from '../../utils/trpc';
import { Dispatch, SetStateAction } from 'react';

type FormValues = {
	text: string;
	author: string;
};

interface Props {
	refetch: () => void;
	setNewComment: Dispatch<SetStateAction<boolean>>;
}

export const NewCommentForm: React.FC<Props> = ({ refetch, setNewComment }) => {
	const { register, handleSubmit } = useForm<FormValues>();

	const commentMutation = trpc.useMutation(['comment.addComment'], {
		onSuccess: () => {
			console.log('success');

			setNewComment(false);
			refetch();
		},
	});
	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		const commentInDb = await commentMutation.mutate(data);

		// console.log(commentInDb);
	};

	return (
		<form
			className={styles.card}
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
		>
			<label htmlFor="name">
				Name:{' '}
				<input {...register('author')} type="text" className={styles.input} />
			</label>
			<div className={styles.gap} />
			<label htmlFor="text">
				Comment:{' '}
				<textarea {...register('text')} className={styles.input} rows={3} />
			</label>

			<div className={styles.gap} />
			<input
				type="submit"
				className={styles.submit}
				value="Submit"
				disabled={commentMutation.isLoading}
			/>
		</form>
	);
};
