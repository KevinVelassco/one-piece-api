import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  environment: process.env.NODE_ENV || 'local',
  app: {
    port: parseInt(process.env.PORT, 10) || 8080,
    selftWebUrl: process.env.SELF_WEB_URL,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION
  },
  database: {
    client: process.env.DATABASE_CLIENT,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    log: process.env.DATABASE_LOG || 'yes'
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET
  },
  mailgun: {
    domain: process.env.MAILGUN_DOMAIN,
    privateKey: process.env.MAILGUN_PRIVATE_KEY,
    emailFrom: process.env.MAILGUN_EMAIL_FROM
  }
}));
