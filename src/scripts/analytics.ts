// Delegated click listener that forwards [data-analytics] events to GA4 / Meta Pixel
// when those scripts are wired on the page. No-op if either provider is absent.
document.addEventListener('click', (e) => {
  const target = (e.target as HTMLElement | null)?.closest('[data-analytics]');
  if (!target) return;
  const name = target.getAttribute('data-analytics');
  if (!name) return;
  window.gtag?.('event', name);
  window.fbq?.('trackCustom', name);
});
