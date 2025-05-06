'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { serverApi } from './serverApi';
import { userSlice } from './context/userSlice';
import { currentPageTitleSlice } from './context/currentPageTitleSlice';

const appReducer = combineReducers({
    [serverApi.reducerPath]: serverApi.reducer,
    userInfo: userSlice.reducer,
    pageInfo: currentPageTitleSlice.reducer
});

const rootReducer = (
    state: ReturnType<typeof appReducer> | undefined,
    action: Parameters<typeof appReducer>[1]
) => {
    return appReducer(state, action);
};

export const rtkStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverApi.middleware)
});

setupListeners(rtkStore.dispatch);

// Inferred types for TypeScript
export type RootState = ReturnType<typeof rtkStore.getState>;
export type AppDispatch = typeof rtkStore.dispatch;
