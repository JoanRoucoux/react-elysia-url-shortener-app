import { Elysia, t } from 'elysia';
import { postUrl, getUrls, getUrl, deleteUrl } from '../controllers/urls';

export const urlsRouter = (app: Elysia) =>
  app.group('/urls', (app: Elysia) =>
    app
      .post('/', postUrl, {
        body: t.Object({
          originalUrl: t.String(),
        }),
      })
      .get('/', getUrls)
      .get('/:shortenUrl', getUrl)
      .delete('/:shortenUrl', deleteUrl)
  );
