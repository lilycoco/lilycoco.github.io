export const GA_TRACKING_ID = "G-DCXXLFJ6XD" || "";

export const pageview = (url: string): void => {
  if (!GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
