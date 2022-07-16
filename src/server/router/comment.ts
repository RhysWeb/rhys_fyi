import { createRouter } from './context';
import { z } from 'zod';

export const commentRouter = createRouter().query('getAll', {
	async resolve({ ctx }) {
		return await ctx.prisma.comment.findMany();
	},
});
