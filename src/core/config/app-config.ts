import * as dotenv from "dotenv";
dotenv.config();

// environment
const NODE_ENV: string = process.env.NODE_ENV || "development";
// const PORT: number = parseInt(process.env.PORT, 10) || 3000;
const PORT: number = parseInt(process.env.PORT, 10) || 5000;

// application
const DOMAIN: string = process.env.DOMAIN || "https://dental-360.herokuapp.com";
// const DOMAIN: string = process.env.DOMAIN || "http://localhost:3000";
const GOOGLE_APPLICATION_CREDENTIALS: string =
  process.env.GOOGLE_APPLICATION_CREDENTIALS || "src/service-account-key.json";
const FIREBASE_PROJECT_ID: string =
  process.env.FIREBASE_PROJECT_ID || "merabharatproducts-26605";

const HASURA_DATABASE_DOMAIN =
  process.env.HASURA_DATABASE_URL ||
  "https://dental-360-int-dev.hasura.app";

// Hasura
const HASURA_DATABASE_URL =
  process.env.HASURA_DATABASE_URL ||
  `${HASURA_DATABASE_DOMAIN}/v1/graphql`;

const HASURA_DATABASE_SECRET = process.env.HASURA_DATABASE_SECRET || "Ast@2020";

const HASURA_NEW_DATABASE_DOMAIN =
  process.env.HASURA_NEW_DATABASE_URL ||
  "https://dental360-dev.hasura.app";

// Hasura
const HASURA_NEW_DATABASE_URL =
  process.env.HASURA_NEW_DATABASE_URL ||
  `${HASURA_NEW_DATABASE_DOMAIN}/v1/graphql`;

const HASURA_NEW_DATABASE_SECRET = process.env.HASURA_NEW_DATABASE_SECRET || "Ast@2020";

// jsonwebtoken
const ACCESS_TOKEN_ISSUER: string = process.env.ACCESS_TOKEN_ISSUER || 'http://localhost';
// const ACCESS_TOKEN_ISSUER: string = process.env.ACCESS_TOKEN_ISSUER || 'https://dental-360-front.web.app';
const ACCESS_TOKEN_ALGORITHM = `HS256`;
const ACCESS_TOKEN_SECRET: string =
  process.env.ACCESS_TOKEN_SECRET ||
  "6561306530383238663537363431633062356637373362376635336630666263";
const ACCESS_TOKEN_EXPIRY: string =
  process.env.ACCESS_TOKEN_EXPIRY || "30 days";
const REFRESH_TOKEN_EXPIRY: string =
  process.env.REFRESH_TOKEN_EXPIRY || "10 days";

// Swagger Config
const APP_NAME: string = process.env.APP_NAME || "Auth Service";
const API_VERSION: string = process.env.API_VERSION || "0.0.1";
const ORGANIZATION_NAME: string = process.env.ORGANIZATION_NAME || "AST";
const ORGANIZATION_WEBSITE: string =
  process.env.ORGANIZATION_WEBSITE || "https://dbgen.xyz";
const ORGANIZATION_EMAIL: string =
  process.env.ORGANIZATION_EMAIL || "info@appliedsynergy.tech";
const SWAGGER_DEV_SERVER: string =
  process.env.SWAGGER_DEV_SERVER || `http://localhost:${PORT}`;
const SWAGGER_PROD_SERVER: string =
  process.env.SWAGGER_PROD_SERVER || DOMAIN;

// Email
const MAILER_EMAIL = "erpdental1@gmail.com";
const MAILER_PASSWORD = "Dentalerp@1234";
const MAILER_SENDER_NAME = "Dental 360";
const MAILER_SMTP = "smtp.gmail.com";
const MAILER_PORT = 587;

// Aws Images
const AWS_KEY = process.env.AWS_KEY || "AKIA2TV3VESEPFXE2H7P";
const AWS_SECRET = process.env.AWS_SECRET || "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";
const AWS_BUCKET = process.env.AWS_BUCKET || "dentalerp-dev";
const AWS_BUCKET_URL = process.env.AWS_BUCKET_URL || "https://dentalerp-dev.s3-ap-southeast-2.amazonaws.com";

// const AWS_BUCKET = process.env.AWS_BUCKET || "dental-erp-bucket";
const AWS_CLOUDFRONT_KEY =
  process.env.AWS_CLOUDFRONT_KEY || "APKAJWTTOE3S3DVE5EMQ";
const AWS_CLOUDFRONT_URL =
  process.env.AWS_CLOUDFRONT_URL || "d2u6cbf9svhft2.cloudfront.net";
const AWS_REGION = process.env.AWS_REGION || "ap-south-1";

const AWS_LOG_GROUP = process.env.AWS_LOG_GROUP || "backend-api-test-dev";
const AWS_LOG_STREAM = process.env.AWS_LOG_STREAM || "auth-service";
const AWS_DEFAULT_DIRECTORY = `${APP_NAME} dev-test`;

const AWS_BUCKET_PUBLIC = process.env.AWS_BUCKET_PUBLIC || AWS_BUCKET;
const AWS_BUCKET_PUBLIC_URL = process.env.AWS_BUCKET_PUBLIC || AWS_BUCKET_URL;

const LOCAL_TEXT_API_KEY = "6u7jX/Q5O7c-zormCd5KdSW7eRBpRqPDpR5zRKd23w";

const WEBHOOK_HASURA_SECRET_KEY = process.env.WEBHOOK_HASURA_SECRET_KEY || "76C33B2A382CE26E45447F8633DA9";

// stripe: {
//   // The two-letter country code of your Stripe account (required for Payment Request).
//   country: process.env.STRIPE_ACCOUNT_COUNTRY || 'US',
//   // API version to set for this app (Stripe otherwise uses your default account version).
//   apiVersion: '2019-03-14',
//   // Use your test keys for development and live keys for real charges in production.
//   // For non-card payments like iDEAL, live keys will redirect to real banking sites.
//   publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   secretKey: process.env.STRIPE_SECRET_KEY,
//   // Setting the webhook secret is good practice in order to verify signatures.
//   // After creating a webhook, click to reveal details and find your signing secret.
//   webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
// },

// #STRIPE_PUBLISHABLE_KEY=pk_test_51J6A9ZKPMVse9g3Tc8H48foFspdnKdfIv7hyQNbviHf5MwGrVGM7Ns2NKOPT5X7tRsJJflimRMaZbhOtRnePDaGY00HLKxqK7d
// STRIPE_PUBLISHABLE_KEY=pk_live_51J6A9ZKPMVse9g3TwnFj53UTJcFUMWgzDAgJAZqDarQrWvfEiQS7Rrg6BvApwDAPzO4xRXbNfrEx9nXU3fKaHOOg00cxOeVmdK
// #STRIPE_SECRET_KEY=sk_test_51J6A9ZKPMVse9g3TWx2VR7biVLESladnSD2nJOA9rQ8AdRNfv0MfhPHrPNmnJwjn3b1vuCsRyaCMZJqBkW9OxdwR00Ia6cuGlE
// STRIPE_SECRET_KEY=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

// const STRIPE_SECRET = process.env.STRIPE_SECRET || "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";
const STRIPE_SECRET = process.env.STRIPE_SECRET || "sk_test_51J6A9ZKPMVse9g3TWx2VR7biVLESladnSD2nJOA9rQ8AdRNfv0MfhPHrPNmnJwjn3b1vuCsRyaCMZJqBkW9OxdwR00Ia6cuGlE";
const STRIPE_VERSION = process.env.STRIPE_VERSION || "2019-03-14";

const BCRYPT_SALT = 10;

// File Upload

const FILE_IMAGE_SUPPORTED_TYPES = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/svg",
  "image/webp",
  "image/gif",
];
const FILE_IMAGE_SIZE = 5;
const FILE_VIDEO_SUPPORTED_TYPES = ["video/mp4"];
const FILE_VIDEO_SIZE = 100;
const FILE_SUPPORTED_TYPES = [
  "application/pdf",
  "application/octet-stream",
  "application/csv",
  "application/xcs",
  "application/xls",
  "application/doc",
  "application/docx",
  "application/zip",
  "application/txt",
  "pdf",
  "application/ppt",
  "application/html",
  "application/mp3",
  "application/m4a",
  "html",
];
const FILE_SIZE = 10;

export const appConfig = {
  NODE_ENV,
  DOMAIN,
  PORT,

  ACCESS_TOKEN_ISSUER,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_ALGORITHM,
  REFRESH_TOKEN_EXPIRY,

  GOOGLE_APPLICATION_CREDENTIALS,
  FIREBASE_PROJECT_ID,

  // HASURA_DATABASE_URL,
  // HASURA_DATABASE_SECRET,
  // HASURA_DATABASE_DOMAIN,

  HASURA_NEW_DATABASE_URL,
  HASURA_NEW_DATABASE_SECRET,
  HASURA_NEW_DATABASE_DOMAIN,

  APP_NAME,
  API_VERSION,
  ORGANIZATION_NAME,
  ORGANIZATION_WEBSITE,
  ORGANIZATION_EMAIL,

  SWAGGER_DEV_SERVER,
  SWAGGER_PROD_SERVER,
  // SWAGGER_NGROK_SERVER,

  MAILER_EMAIL,
  MAILER_PASSWORD,
  MAILER_PORT,
  MAILER_SENDER_NAME,
  MAILER_SMTP,

  AWS_KEY,
  AWS_SECRET,
  AWS_BUCKET,
  AWS_BUCKET_PUBLIC,
  AWS_BUCKET_PUBLIC_URL,
  AWS_DEFAULT_DIRECTORY,
  AWS_REGION,
  AWS_LOG_GROUP,
  AWS_LOG_STREAM,
  AWS_CLOUDFRONT_KEY,
  AWS_CLOUDFRONT_URL,

  LOCAL_TEXT_API_KEY,

  WEBHOOK_HASURA_SECRET_KEY,

  BCRYPT_SALT,

  FILE_IMAGE_SUPPORTED_TYPES,
  FILE_IMAGE_SIZE,
  FILE_VIDEO_SIZE,
  FILE_VIDEO_SUPPORTED_TYPES,
  FILE_SUPPORTED_TYPES,
  FILE_SIZE,

  STRIPE_SECRET,
  STRIPE_VERSION,

};

