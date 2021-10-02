import { Reducer } from 'redux';

enum Actions {
  Set = 'Account/SET',
}

const initialState = {
  address: '',
};

type State = typeof initialState;

export const account: Reducer<State, Action> = (state = initialState, action) => {
  if (action.type === Actions.Set) {
    return { ...state, ...action.data };
  }

  return state;
};

export const actionSetAddress = (data: Partial<State>) => ({ type: Actions.Set, data } as const);

type Action = ReturnType<typeof actionSetAddress>;
