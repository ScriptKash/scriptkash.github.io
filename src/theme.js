import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '../theme/colors.theme';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: colors.white,
    },
    error: {
      main: colors.white,
    },
    background: {
      default: colors.blackTrue,
    },
  },
});

export default theme;
