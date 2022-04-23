import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../configureStore";
import { User } from "../utils/types";

type AuthState = {
	user: User | null,
	token: string | null,
}

const slice = createSlice({
	name: 'auth',
	initialState: { user: null, token: null } as AuthState,
	reducers: {
		setCredentials: (
			state,
			{ payload: { user, token } }: PayloadAction<{ user: User; token: string }>
		) => {
			state.user = user,
			state.token = token
		}
	}
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user;
