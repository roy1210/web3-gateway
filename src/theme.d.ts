import { CometThemeType } from 'comet-ui-kit';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends CometThemeType {}
}
