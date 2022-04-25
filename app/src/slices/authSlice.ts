import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../configureStore";
import { User, UserResponse } from "../utils/types";

type AuthState = {
	user: UserResponse | null,
	token: string | null,
}

const slice = createSlice({
	name: 'auth',
	initialState: { user: null, token: null } as AuthState,
	reducers: {
		setCredentials: (
			state,
			{ payload: { user, token } }: PayloadAction<{ user: UserResponse|null; token: string|null }>
		) => {
			state.user = user,
			state.token = token
		},
	}
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectUserGroups = (state: RootState) => state.auth.user?.groups;

export const selectUserChildren = (state: RootState) => state.auth.user?.children;
