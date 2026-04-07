export function hexToRgba(hex: string, alpha: number): string {
  if (!hex?.startsWith("#")) return `rgba(0, 0, 0, ${alpha})`;

  const normalizedHex =
    hex.length === 4
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;

  const red = Number.parseInt(normalizedHex.slice(1, 3), 16);
  const green = Number.parseInt(normalizedHex.slice(3, 5), 16);
  const blue = Number.parseInt(normalizedHex.slice(5, 7), 16);

  if ([red, green, blue].some(Number.isNaN)) {
    return `rgba(0, 0, 0, ${alpha})`;
  }

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
