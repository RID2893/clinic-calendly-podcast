import { persistentAtom } from '@nanostores/persistent';

export const isAuthenticated = persistentAtom<boolean>('admin-auth', false, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

// Admin credentials (using plain text for development)
export const ADMIN_USERNAME = 'admin';
export const ADMIN_PASSWORD = 'admin123';