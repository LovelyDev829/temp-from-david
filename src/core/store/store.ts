import { configureStore } from '@reduxjs/toolkit';

import appSliceReducer from './slices/appSlice';

const store = configureStore({
  reducer: {
    counter: appSliceReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
