import { Reducer } from 'redux';

enum Actions {
  Set = 'Settings/SET',
}

const initialState = {
  theme: 'dark',
};

type State = typeof initialState;

export const settings: Reducer<State, Action> = (state = initialState, action) => {
  if (action.type === Actions.Set) {
    return { ...state, ...action.data };
  }

  return state;
};

export const actionSetSettings = (data: Partial<State>) => ({ type: Actions.Set, data } as const);

type Action = ReturnType<typeof actionSetSettings>;
