import { Elysia, t } from 'elysia';
import { postUrl, getUrls, getUrl, deleteUrl } from '../controllers/urls';

export const urlsRouter = (app: Elysia) =>
  app.group('/urls', (app) =>
    app
      .get('/', getUrls)
      .get('/:shortenUrlKey', getUrl)
      .post('/', postUrl, {
        body: t.Object({
          originalUrl: t.String(),
        }),
      })
      .delete('/:shortenUrlKey', deleteUrl)
  );
