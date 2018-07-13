import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<{}>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
