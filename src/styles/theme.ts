const colors = {
  textPrimary: '#000000',
  textSecondary: '#3e3e3e',
  background: '#f8f8f8',
  foreground: '#ffffff',
  primary: '#fdd023',
  secondary: '#ff4081', //#232EFC
  error: '#f44336',
};

const space = [0, 4, 8, 16, 32];

const breakpoints = ['40em', '52em', '64em'];

const fontSizes = [12, 14, 16, 20, 24, 32];

export const theme = {
  colors,
  breakpoints,
  fontWeights: {
    body: 400,
    heading: 700,
  },
  space: {
    small: space[1],
    medium: space[2],
    large: space[3],
    giga: space[4],
  },
  fontSizes: {
    footer: fontSizes[1],
    body: fontSizes[2],
    navigation: fontSizes[3],
    title: fontSizes[4],
    display: fontSizes[5],
  },
  mediaQueries: {
    small: `@media screen and (max-width: ${breakpoints[0]})`,
    medium: `@media screen and (max-width: ${breakpoints[1]})`,
    large: `@media screen and (max-width: ${breakpoints[2]})`,
  },
  boxShadow: {
    hover:
      '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),0 3px 1px -2px rgba(0, 0, 0, 0.2);',
  },
};
