// src/config/env.ts
import { enum as enum_, InferInput, minLength, object, parse, pipe, string } from 'valibot';

export enum AppEnv {
  Development = 'development',
  Staging = 'staging',
  Production = 'production',
}

const envSchema = object({
  NODE_ENV: pipe(enum_(AppEnv), minLength(1, 'Missing ENV => (NODE_ENV)')),
  NEXT_PUBLIC_URL: pipe(string(), minLength(1, 'Missing ENV => (NEXT_PUBLIC_URL)')),
  PORT: pipe(string(), minLength(1, 'Missing ENV => (PORT)')),
});

export const validateEnv = () => {
  try {
    parse(envSchema, process.env);
  } catch (error) {
    console.log('-----------------------');
    console.log('| == > Missing ENV    |');
    console.log('-----------------------');
    throw new Error();
  }
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends InferInput<typeof envSchema> {}
  }
}
