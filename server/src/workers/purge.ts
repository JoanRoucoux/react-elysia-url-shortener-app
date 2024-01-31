import { Elysia } from 'elysia';
import { cron } from '@elysiajs/cron';
import { deleteByExpiredIds } from '../services/urls';

const EVERYDAY_MINUTES = '* * * * *'; // for demonstration only

export const purge = (app: Elysia) =>
  app.use(
    cron({
      name: 'purge',
      pattern: EVERYDAY_MINUTES,
      run: async () => {
        try {
          await deleteByExpiredIds();
        } catch (e: any) {
          console.log(e);
        }
      },
    })
  );
