/**
 * Site-wide constants. Edit here to update brand voice across all pages.
 */
export const site = {
  name: 'Tiligul Club',
  legalName: 'Tiligul Club',
  url: 'https://tiligul.club',
  locale: 'uk_UA',
  language: 'uk',
  tagline: 'Пляжний клуб на Тилігульському лимані',
  shortDescription:
    'Шезлонги під навісом, перголи, павільйон-зірки, пляжний бар, глемпінг і кайт-школа на косі біля села Українка.',
  longDescription:
    'Tiligul Club — пляжний клуб, глемпінг і кайт-школа на Тилігульському лимані біля села Українка, Миколаївська область. Солона вода, спокійна акваторія, піщана коса, кафе на пляжі, глемпи з видом на захід сонця та кайт-школа з власною метеостанцією.',
  address: {
    region: 'Миколаївська область',
    locality: 'село Українка',
    waterbody: 'Тилігульський лиман',
    country: 'Україна',
  },
  geo: {
    latitude: 46.7167,
    longitude: 31.4833,
  },
  // Google Maps link to the actual location pin (canonical short URL from production)
  mapsUrl: 'https://goo.gl/maps/4NbBBfyrV32b1n8R8?coh=178572&entry=tt',
  // Track these to wire GA4/Meta later.
  analyticsEvents: {
    bookBeach: 'click_book_beach',
    bookGlamping: 'click_book_glamping',
    kiteContact: 'click_kite_contact',
    maps: 'click_maps',
    phone: 'click_phone',
    instagram: 'click_instagram',
  },
};

export type Site = typeof site;
