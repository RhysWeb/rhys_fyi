import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './signIn.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';

import { BsGithub, BsTwitter, BsGoogle } from 'react-icons/bs';

const providers = [
	{
		name: 'github',
		Icon: BsGithub,
	},
	{
		name: 'twitter',
		Icon: BsTwitter,
	},
	{
		name: 'google',
		Icon: BsGoogle,
	},
];

const Signin = () => {
	const { data: session, status } = useSession();
	const { push } = useRouter();
	const [email, setEmail] = useState('');

	console.log(session);
	if (status === 'loading') return <div>Checking Authentication...</div>;

	if (session) {
		setTimeout(() => {
			push('/');
		}, 5000);

		return (
			<div>
				you are already signed in
				<button onClick={() => signOut()}>sign out</button>
			</div>
		);
	}

	const handleOAuthSignIn = (provider: any) => () =>
		signIn(
			provider,
			{ callbackURL: 'http://localhost:3000/' },
			{ prompt: 'login' }
		);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (!email) return false;

		signIn('email', { email, redirect: false });
	};

	return (
		<>
			<ul>
				{providers.map(({ name, Icon }) => (
					<li key={name}>
						<Icon />
						<button onClick={handleOAuthSignIn(name)}>
							Sign in with {name}
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default Signin;
