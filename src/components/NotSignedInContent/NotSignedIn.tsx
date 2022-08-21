import ButtonOne from '../ButtonOne/ButtonOne';
import styles from './NotSignedIn.module.css';
import { signIn } from 'next-auth/react';

interface Props {}

export const NotSignedIn: React.FC<Props> = ({}) => {
	return (
		<div className={styles.main}>
			<h1 className={styles.title}>You aint signed in</h1>

			<ButtonOne
				margin="3rem 0 0 0"
				text="Sign in with Google"
				onClick={() => {
					signIn('google');
				}}
			/>
		</div>
	);
};
