import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../stores/auth';

export const POST: APIRoute = async () => {
  isAuthenticated.set(false);
  return new Response(null, {
    status: 302,
    headers: {
      'Location': '/admin/login',
      'Set-Cookie': 'auth=; Path=/; HttpOnly; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
  });
};