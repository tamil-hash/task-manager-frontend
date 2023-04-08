import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface authState {
  name: string,
  mail: string,
  token: string,
  id: string,
};

const initialState: authState = {
  name: "",
  mail: "",
  token: "",
  id: "",
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserDetails: (state:authState ,action: PayloadAction<authState>) => {
      state.name = action.payload.name;
      state.mail = action.payload.mail;
      state.token = action.payload.token;
      state.id = action.payload.id;
      console.log(state)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = authSlice.actions

export default authSlice.reducer;