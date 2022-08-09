import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../server/db/client';

export default NextAuth({
	// Configure one or more authentication providers
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
		// FacebookProvider({
		// 	clientId: process.env.FACEBOOK_ID,
		// 	clientSecret: process.env.FACEBOOK_SECRET,
		// }),
		// ...add more providers here
	],

	secret: process.env.JWT_SECRET,
	callbacks: {
		async jwt({ token, user }) {
			user && (token.user = user);
			return token;
		},
		async session({ session, user }) {
			session = {
				...session,
				user: {
					id: user.id,
					role: user.role,
					...session.user,
				},
			};
			return session;
		},
	},
});
