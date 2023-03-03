import { darken, lighten, ThemeOptions } from '@mui/material';

// MUI Theme does provide an augment color function but the coefficients used here are different
const customAugmentColor = (color: string) => ({
  dark: darken(color, 0.1),
  light: lighten(color, 0.1),
  main: color,
  pale: lighten(color, 0.91),
});

// Palette Colors
const colors = {
  attention: customAugmentColor('#fecf83'), // yellowish - app banner
  backgroundGrey: customAugmentColor('#F6F6F6'),
  black: {
    light: '#333f48',
    main: '#262626',
  },
  brandBeige: customAugmentColor('#FEEDD3'),
  brandBlue: {
    light: '#0093d7',
    main: '#024172',
  },
  brandGreen: customAugmentColor('#43a048'), // {...customAugmentColor('#43a048'),light: '#F3F9F3',},
  brandNeonPurple: customAugmentColor('#9b51e0'),
  brandOrange: { ...customAugmentColor('#EB602A'), light: lighten('#EB602A', 0.25) },
  brandPink: customAugmentColor('#f21d69'),
  brandPurple: {
    // light: '#e2e5ff', // light purple - login background
    ...customAugmentColor('#6c4992'), // main logo purple
    light: '#f0ecf4', // pale purple payment type bg
    mid: lighten('#6c4992', 0.7), // mid purple - old avatar border
  },
  brandRed: customAugmentColor('#e23834'),
  brandTeal: customAugmentColor('#57BFC9'),
  brandYellow: { ...customAugmentColor('#fcaf17'), pale: lighten('#fcaf17', 0.7) },
  chipGrey: customAugmentColor('#6d7278'),
  ourGrey: customAugmentColor('#f8fcff'),
  realBlack: { main: '#000' },
  statuses: {
    pending: '#6d7278',
    sent: '#0091ff',
  },
  statusOrange: customAugmentColor('#f57c01'),
  white: customAugmentColor('#ffffff'),
};

export const palette: ThemeOptions['palette'] = {
  ...colors,
  alert: {
    ...colors.brandPink,
    contrastText: colors.white.main,
  },
  attention: {
    ...colors.attention,
    contrastText: colors.black.main,
  },
  background: {
    default: colors.backgroundGrey.main,
    paper: colors.white.main,
  },
  brandPurple: { ...colors.brandPurple, contrastText: colors.white.main },
  chipGrey: {
    ...colors.chipGrey,
    contrastText: colors.white.main,
  },
  error: {
    ...colors.brandRed,
    contrastText: colors.white.main,
  },
  pale: {
    ...colors.ourGrey,
    contrastText: colors.black.main,
  },
  primary: {
    main: colors.brandBlue.light,
  },
  secondary: {
    main: colors.brandBeige.main,
  },
  statusPending: {
    main: colors.statuses.pending,
  },
  statusSent: {
    main: colors.statuses.sent,
  },
  success: {
    ...colors.brandGreen,
    contrastText: colors.white.main,
  },
  text: {
    primary: colors.black.main, // main text color
    // secondary: colors.black, // labels
    tertiary: colors.black.light, // text color in some tooltips and modals
  },
  warning: {
    ...colors.brandOrange,
    contrastText: colors.white.main,
  },
  warningLight: {
    ...colors.brandYellow,
    contrastText: colors.white.main,
  },
};
