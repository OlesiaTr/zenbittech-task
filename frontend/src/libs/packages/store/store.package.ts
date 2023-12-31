import {
  type AnyAction,
  type MiddlewareArray,
  type ThunkMiddleware,
} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { AppEnvironment } from '#libs/enums/enums.js';
import { type Config } from '#libs/packages/config/config.js';
import { notification } from '#libs/packages/notification/notification.js';
import { authApi } from '#packages/auth/auth.js';
import { dealsApi } from '#packages/deals/deals.js';
import { userApi } from '#packages/users/users.js';
import { reducer as appReducer } from '#slices/app/app.js';
import { reducer as authReducer } from '#slices/auth/auth.js';
import { reducer as dealsReducer } from '#slices/deals/deals.js';
import { reducer as usersReducer } from '#slices/users/users.js';

import { storage } from '../storage/storage.js';

type RootReducer = {
  auth: ReturnType<typeof authReducer>;
  users: ReturnType<typeof usersReducer>;
  app: ReturnType<typeof appReducer>;
  deals: ReturnType<typeof dealsReducer>;
};

type ExtraArguments = {
  authApi: typeof authApi;
  userApi: typeof userApi;
  storage: typeof storage;
  notification: typeof notification;
  dealsApi: typeof dealsApi;
};

class Store {
  public instance: ReturnType<
    typeof configureStore<
      RootReducer,
      AnyAction,
      MiddlewareArray<[ThunkMiddleware<RootReducer, AnyAction, ExtraArguments>]>
    >
  >;

  public constructor(config: Config) {
    this.instance = configureStore({
      devTools: config.ENV.APP.ENVIRONMENT !== AppEnvironment.PRODUCTION,
      reducer: {
        auth: authReducer,
        users: usersReducer,
        app: appReducer,
        deals: dealsReducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          thunk: {
            extraArgument: this.extraArguments,
          },
        });
      },
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      authApi,
      userApi,
      notification,
      storage,
      dealsApi,
    };
  }
}

export { Store };
