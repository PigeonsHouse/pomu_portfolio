const withSansSerif = (fontName: string) => `"${fontName}", sans-serif`;

export const FontFamily = {
  Heading: withSansSerif("Gruppo"),
  Default: withSansSerif("Noto Sans JP"),
};
