import { nanoid } from 'nanoid';
import { redis } from '../helpers';
import Url, { type IUrl } from '../models/Url';
import { isValidUrl } from '../utils/validator';

const SHORTEN_URL_KEY_SIZE = 8;
const ONE_HOUR_IN_SECONDS = 3600;

export const getAll = async (): Promise<IUrl[]> => await Url.find();

export const get = async (shortenUrlKey: string): Promise<string | null> => {
  const cachedUrl = await redis.client.get(shortenUrlKey);
  if (cachedUrl) {
    return cachedUrl;
  }

  const savedUrl = await Url.findOne({ shortenUrlKey });
  if (savedUrl) {
    return savedUrl.originalUrl;
  }

  return null;
};

export const create = async (originalUrl: string): Promise<string | null> => {
  if (!isValidUrl(originalUrl)) {
    return null;
  }

  const existingUrl = await Url.findOne({ originalUrl });
  if (existingUrl) {
    return existingUrl.shortenUrlKey;
  }

  const shortenUrlKey = nanoid(SHORTEN_URL_KEY_SIZE);
  const url = await Url.create({
    originalUrl,
    shortenUrlKey,
  });

  await redis.client.set(url.shortenUrlKey, url.originalUrl, {
    EX: ONE_HOUR_IN_SECONDS,
  });

  return url.shortenUrlKey;
};

export const deleteByShortenUrlKey = async (
  shortenUrlKey: string
): Promise<IUrl | null> => await Url.findOneAndDelete({ shortenUrlKey });

export const deleteByExpiredIds = async (): Promise<void> => {
  const expiredUrls = await Url.find({
    expiresAt: { $lt: new Date() },
  });
  const expiredIds = expiredUrls?.map((url) => url?._id);
  if (Array.isArray(expiredIds) && expiredIds.length) {
    await Url.deleteMany({ _id: expiredIds });
  }
};
