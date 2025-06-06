import { validateEnv } from './config/env';

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    validateEnv();
  }
}
