import type { rootReducer } from './root';

declare module 'react-redux' {
  export interface DefaultRootState extends ReturnType<typeof rootReducer> {}
}
