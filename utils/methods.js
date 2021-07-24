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
