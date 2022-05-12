import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../configureStore';
import { Roles, User, UserDetailResponse } from '../utils/types';

type AuthState = {
	user: UserDetailResponse | null;
	token: string | null;
	role: Roles | null;
};

const slice = createSlice({
	name: 'auth',
	initialState: { user: null, token: null, role: null } as AuthState,
	reducers: {
		setCredentials: (
			state,
			{
				payload: { user, token, role },
			}: PayloadAction<{
				user: UserDetailResponse | null;
				token: string | null;
				role: Roles | null;
			}>,
		) => {
			(state.user = user), (state.token = token), (state.role = role);
		},
	},
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectCurrentRole = (state: RootState) => state.auth.role;

export const selectUserGroups = (state: RootState) => state.auth.user?.groups;

export const selectUserChildren = (state: RootState) =>
	state.auth.user?.children;
