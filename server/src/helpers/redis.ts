import { createClient, RedisClientType } from 'redis';

const { REDIS_HOST, REDIS_DOCKER_PORT } = process.env;

class Redis {
  private static instance: Redis;
  public client!: RedisClientType;

  constructor() {
    this.createClient();
  }

  private createClient = () => {
    try {
      this.client = createClient({
        url: `redis://${REDIS_HOST}:${REDIS_DOCKER_PORT}`,
      });
      console.log('Connected to Redis');
    } catch (error) {
      console.error(error);
    }
  };

  public static getInstance = (): Redis => {
    if (!Redis.instance) {
      Redis.instance = new Redis();
    }

    return Redis.instance;
  };

  public run = async () => {
    try {
      await this.client.connect();
    } catch (error) {
      console.error(error);
    }
  };
}

export const redis = Redis.getInstance();
