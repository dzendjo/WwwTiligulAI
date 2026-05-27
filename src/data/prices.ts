/**
 * Beach pricing for Tiligul Club. Update once per season here — every page consumes this file.
 *
 * Pricing structure:
 *  - Two seasons: shoulder (червень / вересень) and peak (липень / серпень)
 *  - Two day types within each: будні vs вихідні
 *  - Optional "extras" (доплати) per position
 */

export type PriceTier = {
  /** "Будні" | "Вихідні" */
  day: string;
  uah: number;
};

export type SeasonPricing = {
  /** Season label, e.g. "Червень / Вересень". */
  season: string;
  tiers: PriceTier[];
};

export type BeachPosition = {
  id: string;
  /** Internal zone code from beach-zone-map: U, L, R, P, S */
  zoneCode: string;
  title: string;
  shortDescription: string;
  capacity?: string;
  includes?: string[];
  seasons: SeasonPricing[];
  fromPriceLabel: string;
};

/* --- Beach positions ----------------------------------------------------------- */

export const beachPositions: BeachPosition[] = [
  {
    id: 'sunbed-umbrella',
    zoneCode: 'U',
    title: 'Шезлонг під зонтом',
    shortDescription: 'Шезлонг із матрацом у зоні з пляжними зонтами.',
    capacity: '1 особа',
    includes: ['Шезлонг із матрацом', 'Тінь під зонтом', 'Туалет + літній душ'],
    fromPriceLabel: 'від 450 грн',
    seasons: [
      { season: 'Червень / Вересень', tiers: [
        { day: 'Будні', uah: 450 },
        { day: 'Вихідні', uah: 550 },
      ]},
      { season: 'Липень / Серпень', tiers: [
        { day: 'Будні', uah: 550 },
        { day: 'Вихідні', uah: 650 },
      ]},
    ],
  },
  {
    id: 'sunbed-canopy',
    zoneCode: 'L',
    title: 'Шезлонг під навісом',
    shortDescription: 'Шезлонг із матрацом у затіненій зоні L або R.',
    capacity: '1 особа',
    includes: ['Шезлонг із матрацом', 'Тінь під навісом', 'Туалет + літній душ'],
    fromPriceLabel: 'від 450 грн',
    seasons: [
      { season: 'Червень / Вересень', tiers: [
        { day: 'Будні', uah: 450 },
        { day: 'Вихідні', uah: 550 },
      ]},
      { season: 'Липень / Серпень', tiers: [
        { day: 'Будні', uah: 550 },
        { day: 'Вихідні', uah: 650 },
      ]},
    ],
  },
  {
    id: 'pergola',
    zoneCode: 'P',
    title: 'Пергола',
    shortDescription: 'Навіс з бамбукового листя. Затишно для сім’ї чи невеликої компанії.',
    capacity: 'до 3 осіб',
    includes: ['3 шезлонги з матрацами', 'Дах із бамбукового листя', 'Туалет + літній душ', 'Тінь весь день'],
    fromPriceLabel: 'від 1 500 грн',
    seasons: [
      { season: 'Червень / Вересень', tiers: [
        { day: 'Будні', uah: 1500 },
        { day: 'Вихідні', uah: 1800 },
      ]},
      { season: 'Липень / Серпень', tiers: [
        { day: 'Будні', uah: 1650 },
        { day: 'Вихідні', uah: 2100 },
      ]},
    ],
  },
  {
    id: 'lounge-star',
    zoneCode: 'S',
    title: 'Павільйон-зірка',
    shortDescription: 'Велике накриття у формі зірки з м’якими пуфами. Зона для компанії.',
    capacity: '6+ осіб',
    includes: ['Мʼякі пуфи + столи + гамак', 'Накриття від сонця', 'Туалет + літній душ', 'Сервіс із бару'],
    fromPriceLabel: 'від 2 700 грн',
    seasons: [
      { season: 'Червень / Вересень', tiers: [
        { day: 'Будні', uah: 2700 },
        { day: 'Вихідні', uah: 3300 },
      ]},
      { season: 'Липень / Серпень', tiers: [
        { day: 'Будні', uah: 3300 },
        { day: 'Вихідні', uah: 4000 },
      ]},
    ],
  },
];

export const priceNotes = [
  'Для гостей без бронювання пляжної позиції: доступ до туалету + літнього душу — 200 грн/день; з гарячим душем — 400 грн/доба.',
  'Діти до 7 років — безкоштовно у супроводі дорослого.',
  'Орієнтовна вартість, можлива зміна — актуальну ціну підтверджує адміністратор при бронюванні.',
];

/* --- Glamping (PROZORI on Tiligul, 20 tents total) --------------------------- */

export type GlampType = {
  id: string;
  title: string;
  size: string;
  guests: string;
  /** Bed configuration, e.g. "ліжко 160×200 + ліжко 90×200" */
  beds: string;
  description: string;
  fromPriceLabel: string;
  imageHint?: string;
};

export const glampingTypes: GlampType[] = [
  {
    id: 'two-person',
    title: '2-місний',
    size: '18 м²',
    guests: 'до 2 гостей',
    beds: 'ліжко 160×200',
    description:
      'Компактний намет для закоханих пар або двох гостей. Красиві меблі, міні-холодильник для вашого затишку та крита тераса для милування красою лиману.',
    fromPriceLabel: 'від 1 700 грн / ніч',
  },
  {
    id: 'three-person',
    title: '3-місний',
    size: '24 м²',
    guests: 'до 3 гостей',
    beds: 'ліжко 160×200 + ліжко 90×200',
    description:
      'Чудовий вибір для родини з дитиною або компанії з трьох гостей. Тут є естетичні дерев’яні меблі, міні-холодильник та крита тераса з видом на лиман.',
    fromPriceLabel: 'від 2 200 грн / ніч',
  },
  {
    id: 'five-person',
    title: '5-місний',
    size: '30 м²',
    guests: 'до 5 гостей',
    beds: '2 ліжка 160×200 + 1 ліжко 90×200',
    description:
      'Комфортний намет, у якому передбачено все необхідне для відпочинку п’яти гостей: зручні ліжка, міні-кухня й велика вмебльована тераса.',
    fromPriceLabel: 'від 3 000 грн / ніч',
  },
];

/* --- Kite school -------------------------------------------------------------- */

export type KiteService = {
  id: string;
  title: string;
  description: string;
  fromPriceLabel?: string;
};

export const kiteServices: KiteService[] = [
  {
    id: 'course',
    title: 'Курс (10 год)',
    description: 'Повний курс з інструктором — від теорії й керування пілот-кайтом до самостійних стартів з борду.',
    fromPriceLabel: '500 €',
  },
  {
    id: 'lesson',
    title: 'Окреме заняття (1 год)',
    description: 'Індивідуальна година з інструктором — для тих, хто хоче спробувати або підправити техніку.',
    fromPriceLabel: '60 € / год',
  },
  {
    id: 'rental-1h',
    title: 'Прокат · 1 година',
    description: 'Кайт і борд на одну годину — для тих, хто вже катається самостійно.',
    fromPriceLabel: '40 € / год',
  },
  {
    id: 'rental-3h',
    title: 'Прокат · 3 години',
    description: 'Повноцінна сесія на воді з економією за погодинною ставкою.',
    fromPriceLabel: '100 € / 3 год',
  },
];
