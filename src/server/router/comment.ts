import { createRouter } from './context';
import { z } from 'zod';
import { prisma } from '../../server/db/client';

export const commentRouter = createRouter()
	.query('getAll', {
		async resolve() {
			return await prisma.comment.findMany({
				orderBy: { createdAt: 'desc' },
			});
		},
	})
	.mutation('addComment', {
		input: z.object({
			text: z.string(),
			author: z.string(),
		}),
		async resolve({ input }) {
			const commentInDb = await prisma.comment.create({
				data: {
					text: input.text,
					author: input.author,
				},
			});
			console.log(commentInDb);
			return commentInDb;
		},
	});
