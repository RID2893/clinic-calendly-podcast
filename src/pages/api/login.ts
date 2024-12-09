import type { APIRoute } from 'astro';
import { ADMIN_USERNAME, ADMIN_PASSWORD } from '../../stores/auth';
import { isAuthenticated } from '../../stores/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const data = await request.formData();
    const username = data.get('username')?.toString();
    const password = data.get('password')?.toString();

    if (!username || !password) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/admin/login?error=invalid'
        }
      });
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      isAuthenticated.set(true);
      
      cookies.set('auth', 'true', {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 hours
      });

      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/admin/dashboard'
        }
      });
    }

    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/admin/login?error=invalid'
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/admin/login?error=invalid'
      }
    });
  }
};