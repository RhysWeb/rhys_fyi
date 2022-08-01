import React, { FC } from 'react';
import styles from './ButtonOne.module.css';

interface ButtonOneProps {
	onClick: () => void;
	text: string;
	margin?: string;
}

const ButtonOne: FC<ButtonOneProps> = ({ onClick, text: name, margin }) => (
	<button
		onClick={onClick}
		className={styles.button}
		style={{ margin: margin }}
	>
		{name}
	</button>
);

export default ButtonOne;
