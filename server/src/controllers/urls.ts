import { create, getAll, get, deleteByShortenUrl } from '../services/urls';

export const postUrl = async ({ body, set }) => {
  try {
    const { originalUrl } = body;

    const shortenUrl = await create(originalUrl);

    if (!shortenUrl) {
      set.status = 400;

      return {
        message: 'Given URL is not valid!',
      };
    }

    set.status = 201;

    return shortenUrl;
  } catch (e: any) {
    set.status = 500;

    return {
      message: 'Unable to save entry to the database!',
    };
  }
};

export const getUrls = async ({ set }) => {
  try {
    const urls = await getAll();

    set.status = 200;

    return urls;
  } catch (e: unknown) {
    set.status = 500;

    return {
      message: 'Unable to retrieve items from the database!',
    };
  }
};

export const getUrl = async ({ params, set }) => {
  try {
    const { shortenUrl } = params;

    const originalUrl = await get(shortenUrl);

    if (!originalUrl) {
      set.status = 404;

      return {
        message: 'Requested resource was not found!',
      };
    }

    set.redirect = originalUrl;
  } catch (e: unknown) {
    set.status = 500;

    return {
      message: 'Unable to retrieve the resource!',
    };
  }
};

export const deleteUrl = async ({ params, set }) => {
  try {
    const { shortenUrl } = params;

    const savedUrl = await deleteByShortenUrl(shortenUrl);

    if (!savedUrl) {
      set.status = 404;
      return {
        message: `Url with shortenUrl: ${shortenUrl} was not found.`,
      };
    }

    set.status = 204;
  } catch (e: unknown) {
    set.status = 500;

    return {
      message: 'Unable to delete resource!',
    };
  }
};
