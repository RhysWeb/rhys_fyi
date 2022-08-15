// src/server/router/index.ts
import { createRouter } from './context';
import { commentRouter } from './comment';
import superjson from 'superjson';
import { starRouter } from './star';
import { reviewsUserRouter } from './reviewsUser';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('comment.', commentRouter)
	.merge('star.', starRouter)
	.merge('reviewsUser.', reviewsUserRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
