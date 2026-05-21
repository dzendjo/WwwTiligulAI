export type NavLink = {
  label: string;
  /** Either an anchor (#beach) used on the landing, or a path (/beach) for a dedicated page. */
  href: string;
  /** If true, link is visible only in footer (deep SEO pages). */
  footerOnly?: boolean;
};

export const primaryNav: NavLink[] = [
  { label: 'Локація', href: '/#location' },
  { label: 'Пляж', href: '/#beach' },
  { label: 'Глемпінг', href: '/#glamping' },
  { label: 'Кайт', href: '/#kite' },
  { label: 'Кафе', href: '/#cafe' },
  { label: 'Ціни', href: '/#prices' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Контакти', href: '/#contacts' },
];

export const footerSeoNav: NavLink[] = [
  { label: 'Про клуб', href: '/about' },
  { label: 'Пляж', href: '/beach' },
  { label: 'Глемпінг', href: '/camping' },
  { label: 'Кайт-школа', href: '/kite' },
  { label: 'Кафе та бар', href: '/cafe' },
  { label: 'Ціни', href: '/prices' },
  { label: 'Новини', href: '/news' },
  { label: 'Контакти', href: '/contacts' },
];
