import { createTheme } from '@mui/material';

import { defaultMuiTheme } from './default';
import { palette } from './palette';

// See: https://next.material-ui.com/customization/theming/
export const theme = createTheme({
  breakpoints: {
    values: {
      ...defaultMuiTheme.breakpoints.values,
      nav: 1073,
      navMax: 1280,
      superTinyMobile: 360,
      supporterPortal: 960,
      tinyMobile: 400,
    },
  },
  // MuiChip: {
  //   defaultProps: { color: 'chipGrey', size: 'small' },
  // },
  MuiChip: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        background: "#f1f1f1",
        '&:hover': {
          background: "#f00",
      },
        fontSize: '1rem',
      },
    },
  },
  isEditAdminsFormBreak: false,
  isMobile: false, // all these booleans are updated on render once window width is known
  isSuperTinyMobile: false,
  isTinyMobile: false,
  palette,
  shrinkSupporterPortal: false,
});
