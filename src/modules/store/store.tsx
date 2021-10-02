import { useMemo } from 'react';
import { DefaultRootState } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './root';

let store;

function initStore(preloadedState: Partial<DefaultRootState> = undefined) {
  return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware()));
}

const initializeStore = (preloadedState: Partial<DefaultRootState> = undefined) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: Partial<DefaultRootState> = undefined) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
