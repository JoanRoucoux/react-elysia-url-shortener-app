import { create, getAll, get, deleteByShortenUrlKey } from '../services/urls';

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
    const { shortenUrlKey } = params;

    const originalUrl = await get(shortenUrlKey);

    if (!originalUrl) {
      set.status = 404;

      return {
        message: 'Requested resource was not found!',
      };
    }

    set.status = 200;

    return originalUrl;
  } catch (e: unknown) {
    set.status = 500;

    return {
      message: 'Unable to retrieve the resource!',
    };
  }
};

export const postUrl = async ({ body, set }) => {
  try {
    const { originalUrl } = body;

    const shortenUrlKey = await create(originalUrl);

    if (!shortenUrlKey) {
      set.status = 400;

      return {
        message: 'Given URL is not valid!',
      };
    }

    set.status = 201;

    return shortenUrlKey;
  } catch (e: any) {
    set.status = 500;

    return {
      message: 'Unable to save entry to the database!',
    };
  }
};

export const deleteUrl = async ({ params, set }) => {
  try {
    const { shortenUrlKey } = params;

    const savedUrl = await deleteByShortenUrlKey(shortenUrlKey);

    if (!savedUrl) {
      set.status = 404;
      return {
        message: `Url with shortenUrlKey: ${shortenUrlKey} was not found.`,
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
