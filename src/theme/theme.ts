import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core';

/**
 * Custom Mantine theme override for Metallic Blue
 *
 * {@link https://mantine.dev/theming/theme-object/ Theme Object Docs}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-theme.ts Default Theme}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-colors.ts Default Colors}
 */
export const themeOverride = createTheme({
  colors: {
    dark: [
      '#D6D6D6', // Light metallic gray
      '#B8B8B8',
      '#A0A0A0',
      '#696969',
      '#4D4D4D',
      '#3A3A3A',
      '#2E2E2E',
      '#1F1F1F', // Default dark background
      '#191919',
      '#121212',
    ],
    metallicBlue: [
      '#E3F2FD', // Lightest blue
      '#C9E4FB',
      '#A5CDEE',
      '#80B6E2',
      '#5CA0D5', // Primary color
      '#3A8AC9',
      '#2E77B2',
      '#25649B',
      '#1C5184',
      '#143D6C', // Darkest blue
    ],
  },

  primaryColor: 'metallicBlue',

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '3rem', fontWeight: '700', lineHeight: '1.2' },
      h2: { fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.3' },
      h3: { fontSize: '2rem', fontWeight: '600', lineHeight: '1.4' },
    },
  },

  fontFamily: 'Roboto, sans-serif',

  defaultRadius: 'md',

  spacing: {
    xs: '8',
    sm: '12',
    md: '16',
    lg: '24',
    xl: '32',
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
