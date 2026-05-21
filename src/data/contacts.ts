export type ContactChannel = {
  id: string;
  label: string;
  /** Human-readable, e.g. "+38 (093) 50-50-800". */
  display: string;
  /** Used in tel: href, must be E.164. */
  tel: string;
  /** Optional Telegram profile URL — preferred for direct booking on some channels. */
  telegram?: string;
  /** Optional online booking URL — preferred CTA if present (e.g. bookmenow). */
  bookingUrl?: string;
  note?: string;
};

export const phones: ContactChannel[] = [
  {
    id: 'beach',
    label: 'Пляж та лаунжі',
    display: '+38 (093) 50-50-800',
    tel: '+380935050800',
    note: 'Бронювання шезлонгів, пергол, лаунж-зірок',
  },
  {
    id: 'glamping',
    label: 'Глемпінг',
    display: '+38 (068) 769-93-11',
    tel: '+380687699311',
    bookingUrl: 'https://go.bookmenow.pro/t/prozori-tyligul',
    note: 'Бронювання глемпів PROZORI / Tiligul',
  },
  {
    id: 'kite',
    label: 'Кайт-школа',
    display: '+38 (095) 360-12-95',
    tel: '+380953601295',
    telegram: 'https://t.me/NikitaPavlenko_PROcentr',
    note: 'Навчання, прокат, wing & SUP',
  },
];

export const email = {
  display: 'TiligulClub@gmail.com',
  href: 'mailto:TiligulClub@gmail.com',
};

export type Social = { id: string; label: string; href: string; ariaLabel?: string };

export const socials: Social[] = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tiligul.club/', ariaLabel: 'Tiligul Club в Instagram' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/tiligul.club', ariaLabel: 'Tiligul Club у Facebook' },
  { id: 'telegram', label: 'Telegram', href: 'https://t.me/tiligulclub', ariaLabel: 'Tiligul Club у Telegram' },
  { id: 'youtube', label: 'YouTube', href: 'https://youtube.com/@tiligulclub', ariaLabel: 'Tiligul Club на YouTube' },
];
