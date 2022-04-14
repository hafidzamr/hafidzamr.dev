declare global {
  interface Window {
    dataLayer?: object[];
  }
}

export const pageview = (url: string) => {
  window?.dataLayer?.push({
    event: 'Page View',
    page: url,
  });
};
