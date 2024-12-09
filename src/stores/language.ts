import { persistentAtom } from '@nanostores/persistent';

export type Language = 'en' | 'es';

export const currentLanguage = persistentAtom<Language>('clinic-calendly-lang', 'en', {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const translations = {
  en: {
    podcast: 'PODCAST',
    title: 'AI in Healthcare',
    subtitle: 'Exploring the revolutionary impact of AI in healthcare - from patient care to clinical workflows',
    description: 'Join us as we dive deep into the latest AI technologies transforming healthcare delivery, improving patient outcomes, and revolutionizing medical practices. Our podcast focuses on discussing cutting-edge AI innovations that are bringing beneficial disruption to the healthcare industry.',
    newEpisodes: 'New Episodes Weekly',
    episodeDuration: '20-30 min episodes',
    latestEpisodes: 'Latest Episodes',
    listenNow: 'Listen Now',
    downloadEpisode: 'Download Episode',
    shareEpisode: 'Share Episode',
    subscribeToFeed: 'Subscribe to Feed',
    aiHealthcare: 'AI Revolution in Healthcare: CLINIC-CALENDLY\'s Vision',
    episodeDescription: 'Discover how AI-powered scheduling and patient management is transforming healthcare delivery, making it more efficient and accessible than ever before.',
    publishedOn: 'Published on',
    duration: 'Duration',
    adminLogin: 'Admin Access'
  },
  es: {
    podcast: 'PODCAST',
    title: 'IA en la Salud',
    subtitle: 'Explorando el impacto revolucionario de la IA en la salud - desde la atención al paciente hasta los flujos de trabajo clínicos',
    description: 'Únete a nosotros mientras profundizamos en las últimas tecnologías de IA que transforman la prestación de servicios de salud, mejoran los resultados de los pacientes y revolucionan las prácticas médicas. Nuestro podcast se centra en discutir las innovaciones de IA más avanzadas que están trayendo una disrupción beneficiosa a la industria de la salud.',
    newEpisodes: 'Nuevos Episodios Semanales',
    episodeDuration: 'Episodios de 20-30 min',
    latestEpisodes: 'Últimos Episodios',
    listenNow: 'Escuchar Ahora',
    downloadEpisode: 'Descargar Episodio',
    shareEpisode: 'Compartir Episodio',
    subscribeToFeed: 'Suscribirse al Feed',
    aiHealthcare: 'Revolución de la IA en la Salud: La Visión de CLINIC-CALENDLY',
    episodeDescription: 'Descubre cómo la programación y gestión de pacientes impulsada por IA está transformando la prestación de servicios de salud, haciéndola más eficiente y accesible que nunca.',
    publishedOn: 'Publicado el',
    duration: 'Duración',
    adminLogin: 'Acceso Administrador'
  }
} as const;

export type TranslationKey = keyof typeof translations.en;