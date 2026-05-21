# Tiligul Club — сайт

Пляжний клуб, глемпінг і кайт-школа на Тилігульському лимані. Сайт побудовано на **Astro + Tailwind CSS** як швидкий статичний сайт із чистим SEO.

## Стек

- **Astro 5** — статичний рендер, оптимізовані картинки (`astro:assets`), нативний sitemap.
- **Tailwind 3** — токени бренду (deep teal `#0E5C6B`, sand `#F2E6D0`, coral `#E55F36`).
- **Sharp** — оптимізація зображень у WebP/AVIF при build-і.

---

## Запуск

```bash
npm install
npm run dev      # dev на http://localhost:4321
npm run build    # збірка статичних файлів у /dist
npm run preview  # перегляд продакшен-збірки
```

Перший запуск після клону — виконайте `npx astro sync` (генерує типи) і `npm run build`.

---

## Структура

```
src/
  assets/images/     — оригінальні фото з Drive (Astro оптимізує при build)
  components/        — усі UI-блоки (Header, Footer, Hero, BookingCards, ...)
  data/              — увесь редагований контент і конфіги
  layouts/
    BaseLayout.astro — обгортка кожної сторінки: head/SEO/header/footer/sticky CTA
  pages/
    index.astro      — лендінг
    about.astro      — /about
    beach.astro      — /beach
    camping.astro    — /camping
    cafe.astro       — /cafe
    kite.astro       — /kite
    news.astro       — /news
    prices.astro     — /prices
    contacts.astro   — /contacts
    404.astro
  styles/global.css  — глобальні стилі, утиліти .btn-primary / .container-x / etc.
public/
  favicon.svg
  robots.txt
  site.webmanifest
  images/brand/      — логотип у SVG (можна замінити на PNG)
```

---

## Як редагувати контент

Контент **не лежить у markup**. Усе у `src/data/*.ts`:

| Файл | Що змінювати |
|------|---------------|
| `src/data/site.ts` | назва, опис, координати, посилання на Google Maps, аналітичні події |
| `src/data/navigation.ts` | пункти меню (header, footer) |
| `src/data/prices.ts` | **ціни** пляжу / глемпів / кайт-школи + примітки |
| `src/data/contacts.ts` | телефони (пляж, глемпи, кайт), email, соцмережі |
| `src/data/faq.ts` | питання та відповіді FAQ |
| `src/data/services.ts` | основні сервіси та «чому сюди їдуть» |

Зміни в data-файлах автоматично потрапляють і на лендінг, і на окремі сторінки.

### Як міняти ціни (типовий потік раз на сезон)

1. Відкрийте `src/data/prices.ts`.
2. Знайдіть масив `beachPositions` або `glampingTypes` чи `kiteServices`.
3. Поміняйте поля `uah:` (числа) або `fromPriceLabel:` (рядок-«від»).
4. Якщо змінився сезон — оновіть `season:` (наприклад, `'Червень / Вересень'`).
5. `npm run build`. Усе.

### Як міняти контакти

`src/data/contacts.ts` — масив `phones`. Для кожного номера є:
- `display:` — як показується (`+38 (093) 50-50-800`)
- `tel:` — E.164 для `tel:` (`+380935050800`)

Соцмережі — масив `socials`.

### Як додати новину

`src/pages/news.astro` — масив `featured` зверху файлу. Додайте об’єкт з `date`, `title`, `excerpt` на самий верх масиву.

Для повноцінного блогу — мігруйте на Astro Content Collections (`src/content/news/`).

### Як підключити справжні Instagram-пости

Поточний компонент `InstagramGrid.astro` використовує локальні фото для швидкості — без важких сторонніх скриптів.

Варіанти підключення живого фіду:
1. **Instagram Basic Display API** (тимчасові long-lived токени, періодичний refresh).
2. **EmbedSocial / Curator.io** — платні віджети з кешуванням.
3. **Власний кеш** — серверна функція раз на день тягне останні 6 постів і пише JSON у `src/data/instagram-cache.json`, який зчитує компонент.

Простий і безкоштовний шлях: `npx astro add netlify` + Netlify Function, що раз на годину оновлює кеш.

---

## Як замінити лого

Зараз у `public/images/brand/`:
- `tiligul-mark.svg` — знак (мінімалістична компонована іконка)
- `tiligul-logo.svg` — повний логотип із словесною частиною

Якщо є фінальний PNG лого:
1. Покладіть його як `public/images/brand/tiligul-logo.png` (із прозорим фоном, ≥ 1024×).
2. У `src/components/Header.astro` і `src/components/Footer.astro` замініть `src="/images/brand/tiligul-mark.svg"` на потрібний шлях.

---

## Зображення

Усі фото знаходяться в `src/assets/images/`. Astro Image (`<Image>`) автоматично:
- генерує WebP/AVIF;
- віддає кілька розмірів (srcset);
- встановлює `width/height` для нульового CLS;
- лежить за `loading="lazy"` за замовчуванням.

Щоб **додати нове фото**:
1. Покладіть JPEG у `src/assets/images/нова-картинка.jpg` (рекомендую максимум 2400px по ширині).
2. У компоненті імпортуйте: `import myPic from '@assets/images/нова-картинка.jpg';`
3. Використовуйте: `<Image src={myPic} alt="..." widths={[400, 720, 1080]} sizes="..." />`

---

## SEO

- Унікальні `title`, `description`, `canonical`, OG-теги для кожної сторінки (через `<BaseLayout>`).
- `sitemap.xml` і `sitemap-index.xml` генеруються автоматично.
- `robots.txt` — у `public/`.
- JSON-LD structured data:
  - `TouristAttraction` (LocalBusiness-аналог) — на всіх сторінках.
  - `BreadcrumbList` — на внутрішніх.
  - `Restaurant` — на `/cafe`.
  - `Campground` — на `/camping`.
  - `OfferCatalog` — на головній.
- 301/308 редіректи зі старих URL (`/glamping → /camping`, `/menu → /cafe`, etc.) — у `astro.config.mjs`.

---

## Аналітика

`BaseLayout` уже містить **слухач кліків** із `data-analytics`. Усі CTA позначено такими подіями:

| Подія | Де |
|-------|-----|
| `click_book_beach` | усі CTA «Забронювати пляж» |
| `click_book_glamping` | CTA глемпінгу |
| `click_kite_contact` | CTA кайт-школи |
| `click_maps` | посилання на маршрут |
| `click_phone` | номер у футері та контактах |
| `click_instagram` | переходи на Instagram |

### Як підключити GA4

1. Створіть property GA4 → отримайте `G-XXXXXXX`.
2. У `src/layouts/BaseLayout.astro` у `<head>` додайте:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

Скрипт-слухач (внизу `BaseLayout`) уже шле події через `window.gtag(...)`.

### Як підключити Meta Pixel

```html
<script>
  !function(f,b,e,v,n,t,s){…}('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

Слухач уже шле події через `window.fbq('trackCustom', ...)`.

---

## Деплой

Сайт — статичний (`output: 'static'`), розгортається де завгодно:

### Netlify (рекомендую)
```bash
npm run build
# Налаштування Netlify:
# build command: npm run build
# publish directory: dist
```
Drag-and-drop папки `dist/` в Netlify UI працює без CI.

### Vercel
```bash
npm run build
# Build Command: npm run build
# Output Directory: dist
```

### Cloudflare Pages
```
build command: npm run build
build output: dist
```

### Власний VPS
Скиньте вміст `dist/` у webroot (`/var/www/tiligul.club/`) і налаштуйте Nginx:
```nginx
server {
  server_name tiligul.club www.tiligul.club;
  root /var/www/tiligul.club;
  index index.html;
  try_files $uri $uri/ $uri.html =404;

  # gzip / brotli бажано вмикнути на рівні Nginx
}
```

---

## Чекліст прийому

- [x] `/`, `/about`, `/beach`, `/camping`, `/cafe`, `/kite`, `/news`, `/prices`, `/contacts` — окремі сторінки з власним SEO.
- [x] Адаптив 390 / 768 / 1440.
- [x] Sticky mobile CTA (телефон бронювання + маршрут).
- [x] Унікальні title/description/OG/canonical на кожній сторінці.
- [x] JSON-LD: TouristAttraction, Restaurant, Campground, BreadcrumbList, OfferCatalog.
- [x] `sitemap-index.xml`, `robots.txt`.
- [x] 301 редіректи зі старих URL.
- [x] Картинки оптимізовано (WebP, lazy, srcset).
- [x] Аналітичні data-attributes на CTA.

## Контакти проєкту

- Пляж та лаунжі: +38 (093) 50-50-800
- Глемпінг: +38 (068) 769-93-11
- Кайт-школа: +38 (095) 360-12-95
- Email: TiligulClub@gmail.com
