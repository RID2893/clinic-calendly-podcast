import { defineMiddleware } from 'astro:middleware';
import { currentLanguage } from './stores/language';
import { isAuthenticated } from './stores/auth';

export const onRequest = defineMiddleware(async ({ request, cookies }, next) => {
  // Get language from URL
  const url = new URL(request.url);
  const urlLang = url.pathname.split('/')[1];
  
  if (urlLang === 'en' || urlLang === 'es') {
    currentLanguage.set(urlLang);
  }

  // Check authentication for admin routes
  if (url.pathname.startsWith('/admin')) {
    const authCookie = cookies.get('auth');
    if (authCookie?.value === 'true') {
      isAuthenticated.set(true);
    } else {
      isAuthenticated.set(false);
    }
  }
  
  return next();
});