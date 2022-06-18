import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from "../store";
export interface AppData {
  userLogined: boolean;
  userMenuOpen: boolean;
}

const initialState = {
  userLogined : false,
  userMenuOpen: false,
}

const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleUserLogin(state,action) {
      state.userLogined = action.payload;
    },
    closeAllMenu(state) {
      state.userMenuOpen = false;
    },
  }
});
export const selectUserLogined = (state: RootState) => state.counter.userLogined;
export const selectMenuOpen = (state: RootState) => state.counter.userMenuOpen;
export const { toggleUserLogin, closeAllMenu } = appSlice.actions;

export default appSlice.reducer;

