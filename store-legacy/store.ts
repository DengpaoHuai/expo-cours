import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user-slice";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "enfer",
  storage: AsyncStorage,
};

const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userSlice),
  },
});
export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
