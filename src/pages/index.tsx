import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
	color: blue;
	margin: 0;
	line-height: 1.15;
	font-size: 5rem;
	text-align: center;
`;

const PageContainer = styled.div`
	padding: 0 2rem;
`;

const Main = styled.div`
	min-height: 100vh;
	padding: 4rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-block: 1.5rem;
`;

const H2 = styled.h2`
	color: blue;
`;

const A = styled.a`
	font-size: 1.5rem;
	margin-block: 0.5rem;
`;

const Home: NextPage = () => {
	return (
		<PageContainer>
			<Head>
				<title>Chem Eng</title>
				<meta name="Main page" content="Chemical engineering helper tools" />
				<link rel="icon" href="/favicon.ico" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<Main>
				<Title as="h1">Hello</Title>

				<LinksContainer>
					<H2>Links</H2>
					<Link href="/gasconvert">
						<A as="a">Gas conversion</A>
					</Link>

					<Link href="/comments">
						<A>Comments</A>
					</Link>
				</LinksContainer>
			</Main>
		</PageContainer>
	);
};

export default Home;
