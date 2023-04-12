const plugin = require("tailwindcss/plugin");

const parsePx = (px) => {
  return Number(px.slice(0, -2));
};

const pxToRem = (px) => {
  return `${px / 16}rem`;
};

module.exports = ({ extraFonts }) =>
  plugin(({ addComponents, theme }) => {
    const textTheme = theme("text");
    const screens = theme("screens");

    const createStyles = (config, extraFont) => {
      const multiplicator = extraFont?.multiplicator || 1;

      const styles = {
        fontSize: pxToRem(parsePx(config.DEFAULT.fontSize) * multiplicator),
        lineHeight: config.DEFAULT.lineHeight,
        letterSpacing: config.DEFAULT.letterSpacing,
        fontWeight: config.DEFAULT.fontWeight,
      };

      if (extraFont) {
        styles.fontFamily = theme(`fontFamily.${extraFont.name}`);
      }

      Object.keys(screens).forEach((key) => {
        if (config[key]) {
          styles[`@media (min-width: ${screens[key]})`] = {
            fontSize: pxToRem(parsePx(config[key].fontSize) * multiplicator),
            lineHeight: config[key].lineHeight,
            letterSpacing: config[key].letterSpacing,
            fontWeight: config[key].fontWeight,
          };
        }
      });
      return styles;
    };

    const components = Object.keys(textTheme).reduce((all, key) => {
      const config = textTheme[key];
      all[`.text-${key}`] = createStyles(config);

      extraFonts?.forEach((extraFont) => {
        all[`.text-${key}-${extraFont.name}`] = createStyles(config, extraFont);
      });

      return all;
    }, {});

    addComponents(components);
  });
