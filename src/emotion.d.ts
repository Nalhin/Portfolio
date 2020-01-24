import '@emotion/core';

declare module '@emotion/core' {
  export interface Theme {
    colors: {
      textPrimary: string;
      textSecondary: string;
      background: string;
      foreground: string;
      primary: string;
      secondary: string;
      error: string;
      placeholder: string;
      gradient: string;
    };
    breakpoints: string[];
    fontWeights: {
      body: number;
      heading: number;
    };
    space: {
      small: number;
      medium: number;
      large: number;
      giga: number;
    };
    fontSizes: {
      footer: number;
      body: number;
      navigation: number;
      title: number;
      display: number;
    };
    mediaQueries: {
      small: string;
      medium: string;
      large: string;
    };
    boxShadow: {
      hover: string;
      navigation: string;
    };
  }
}
