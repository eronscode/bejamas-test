export function kilobytesToMegaBytes(bytes) {
  return Math.round(bytes / 1024);
}

export function currencyTransform(value) {
  switch (value) {
    case "USD":
      return "$";

    default:
      break;
  }
}

export function paginator(arr, perPage) {
  if (perPage < 1 || !arr) return () => [];

  return function (page) {
    const basePage = (page - 1) * perPage;

    return page < 0 || basePage >= arr.length
      ? []
      : arr.slice(basePage, basePage + perPage);
  };
}
