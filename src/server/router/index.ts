// src/server/router/index.ts
import { createRouter } from './context';
import { commentRouter } from './comment';
import superjson from 'superjson';
import { starRouter } from './star';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('comment.', commentRouter)
	.merge('star.', starRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
