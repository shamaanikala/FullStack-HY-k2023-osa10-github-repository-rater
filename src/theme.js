import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarPrimary: '#24292e', // example colour from material
    appBarSecondary: 'snow',
    mainBackground: '#e1e4e8',
    contentBackground: 'ivory',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    header: 28,
    heading: 20,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
