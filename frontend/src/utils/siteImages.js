// Static site images are hosted on Cloudinary so they don't count against
// Vercel edge requests. Originals live in src/assets (folder reverse/site).
const SITE_IMAGE_BASE = 'https://res.cloudinary.com/dwvgw0wn0/image/upload/f_auto,q_auto/reverse/site';

export const siteImage = (name) => `${SITE_IMAGE_BASE}/${name}`;
