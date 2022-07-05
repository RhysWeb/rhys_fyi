// src/server/router/index.ts
import { createRouter } from './context';
import { exampleRouter } from './example';
import superjson from 'superjson';
import { starRouter } from './star';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('example.', exampleRouter)
	.merge('star.', starRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
