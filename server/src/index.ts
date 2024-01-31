import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { purge } from './workers/purge';
import { urlsRouter } from './routes/urls';
import { mongoose, redis } from './helpers';

mongoose.run();
redis.run();

const port = process.env.NODE_LOCAL_PORT || 8080;
export const app = new Elysia();

app
  .use(cors())
  .use(swagger())
  .use(purge)
  .get('/', () => 'Hello Elysia!')
  .group('/api', (app: Elysia) => app.use(urlsRouter))
  .listen(port, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${port}`);
  });
