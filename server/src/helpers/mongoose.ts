import { connect } from 'mongoose';

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_DATABASE,
  MONGODB_HOST,
  MONGODB_DOCKER_PORT,
} = process.env;

export const mongoose = {
  run: async () => {
    try {
      const URI = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_DOCKER_PORT}/${MONGODB_DATABASE}?authSource=admin`;
      await connect(URI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error(error);
    }
  },
};
