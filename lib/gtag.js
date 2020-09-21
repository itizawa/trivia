export const GA_ID = process.env.GOOGLE_ANALYTICS_ID;

export const existsGaId = GA_ID !== '';

export const pageview = (path) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};

// GAイベントを発火させる
export const event = ({
  action, category, label, value = '',
}) => {
  if (!existsGaId) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
