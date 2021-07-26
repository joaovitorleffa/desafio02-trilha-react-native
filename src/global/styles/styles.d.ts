import { DefaultTheme } from "@react-navigation/native";
import theme from "./theme";

declare module "styled-components" {
  type ThemType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
