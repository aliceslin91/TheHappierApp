const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const lightLightBlue = "#F2FCFF";
const lightBlue = "#AADDEF";
const mediumBlue = "#7EC1D8";
const deepBlue = "#005781";
const yellow = "#FFDB00";
const gray = "#4F4F4F";

/*
const primaryText = gray;
const primaryBackground = lightBlue;
const secondaryText = deepBlue;
const headerText = deepBlue;
const secondaryBackground = mediumBlue;
const buttonBackground = yellow;
*/

export default {
  accentBackground: deepBlue,
  primaryText: gray,
  primaryBackground: lightLightBlue,
  secondaryText: deepBlue,
  secondaryBackground: lightBlue,
  headerText: deepBlue,
  buttonBackground: yellow,
  buttonForeground: deepBlue,
  buttonText: deepBlue,

  light: {
    text: gray,
    background: lightBlue,
    tint: tintColorLight,
    tabIconDefault: lightBlue,
    tabIconSelected: lightLightBlue,
  },
  // TODO: fill these out if there is a dark theme
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
