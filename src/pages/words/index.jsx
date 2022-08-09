import { useEffect } from 'react';
import { ContainerOne } from '../../components/ContainerOne/ContainerOne';

// let SpeechRecognition =
// 	window.SpeechRecognitionAlternative || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// console.log(recognition);
export default function Gases() {
	useEffect(() => {
		let speechRec = window.webkitSpeechRecognition;

		let recognition = new speechRec();
		recognition.addEventListener('result', (e) => {
			console.log(e.results);
		});
		recognition.start();
	}, []);

	return <div id="container">Hi</div>;
}
