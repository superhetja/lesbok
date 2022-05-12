import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../configureStore';
import { BASE_URL } from '../utils/constants';
import {
	Entry,
	EntryResponse,
	EntryWithUser,
	GroupDetailedResponse,
	StudentEntryResponse,
	StudentResponse,
	User,
	UserDetailResponse,
} from '../utils/types';
import { CreateEntryDto, UpdateEntryDto } from './dto';

export interface UserResponse {
	user: User;
	token: string;
}

export interface LoginRequest {
	national_id: string;
}

function providesList<R extends { id: string | number }[], T extends string>(
	resultsWithIds: R | undefined,
	tagType: T,
) {
	return resultsWithIds
		? [
				{ type: tagType, id: 'LIST' },
				...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
		  ]
		: [{ type: tagType, id: 'LIST' }];
}

const baseQuery = () => {
	return fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			const { token } = (getState() as RootState).auth;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	});
};

// eslint-disable-next-line import/prefer-default-export
export const entryApi = createApi({
	reducerPath: 'entryApi',
	baseQuery: baseQuery(),
	tagTypes: ['Entries', 'ReadThisWeek', 'Groups', 'Score'],
	endpoints: build => ({
		login: build.mutation<
			{ user: UserDetailResponse; token: string },
			LoginRequest
		>({
			query: credentials => ({
				url: 'login',
				method: 'POST',
				body: credentials,
			}),
		}),
		setExpoPushToken: build.mutation<{ userId: string; token: string }, any>({
			query: ({ userId, token }) => ({
				url: `users/${userId}/push_token`,
				method: 'POST',
				body: {
					expoPushToken: token,
				},
			}),
		}),
		getEntries: build.query<EntryResponse[], void>({
			query: () => `entries`,
			// Provides a list of `Posts` by `id`.
			// If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
			// The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
			providesTags: result => providesList(result, 'Entries'),
		}),
		getEntryById: build.query<EntryWithUser, string>({
			query: id => `entries/${id}`,
			providesTags: (result, error, id) => [{ type: 'Entries', id }],
		}),
		createEntryForId: build.mutation<Entry, CreateEntryDto>({
			query: body => ({
				url: '/entries',
				method: 'POST',
				body: {
					...body,
				},
			}),
			invalidatesTags: [{ type: 'Entries', id: 'LIST' }, 'ReadThisWeek', 'Score'],
		}),
		editEntryById: build.mutation<Entry, UpdateEntryDto>({
			query: ({ id, ...body }) => ({
				url: `/entries/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Entries', id },
				{ type: 'Score', id },
				{ type: 'ReadThisWeek', id },
			],
		}),
		getReadThisWeek: build.query<number, string>({
			query: id => `/students/${id}/read_week`,
			providesTags: (result, error, id) => [{ type: 'ReadThisWeek', id }],
		}),
		getStudentScore: build.query<number,string>({
			query: (id) => `/students/${id}/score`,
			providesTags: (result, error, id) => [{type: 'Score', id}]
		}),
		getGroupById: build.query<GroupDetailedResponse, string>({
			query: id => `/groups/${id}`,
			providesTags: (result, error, id) => [{ type: 'Groups', id }],
		}),
		getStudentById: build.query<StudentResponse, string>({
			query: (id) => `/students/${id}`,
			// providesTags: (result, error, id) => [{type: 'Score', id}]
		}),
		getStudentEntries: build.query<StudentEntryResponse, string>({
			query: id => `/students/${id}/entries`,
			providesTags: result => providesList(result?.entries, 'Entries'),
		}),
		getUserById: build.query<UserResponse, string>({
			query: id => `/users/${id}`,
		}),
	}),
});

export const {
	useGetEntriesQuery,
	useCreateEntryForIdMutation,
	useEditEntryByIdMutation,
	useGetEntryByIdQuery,
	useGetReadThisWeekQuery,
	useGetStudentScoreQuery,
	useLoginMutation,
	useGetGroupByIdQuery,
	useGetStudentByIdQuery,
	useGetStudentEntriesQuery,
	useSetExpoPushTokenMutation,
} = entryApi;
