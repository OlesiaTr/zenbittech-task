import { getAuthenticatedUser, signIn, signOut, signUp } from './actions.js';
import { actions } from './auth.slice.js';

const allActions = {
  ...actions,
  signUp,
  getAuthenticatedUser,
  signOut,
  signIn,
};

export { allActions as actions };
export { reducer } from './auth.slice.js';
