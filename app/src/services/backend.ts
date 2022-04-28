import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../configureStore';
import { BASE_URL } from '../utils/constants';
import { Entry, EntryResponse, GroupDetailedResponse, StudentEntryResponse, StudentResponse, User, UserDetailResponse } from '../utils/types';
import { CreateEntryDto, UpdateEntryDto } from './dto';

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
	national_id: string;
}

function providesList<R extends { id: string | number }[], T extends string>(
  resultsWithIds: R | undefined,
  tagType: T
) {
	console.log('PROVIDESLIST')
	console.log(resultsWithIds)
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }]
}

// Create our baseQuery instance
// const baseQuery = fetchBaseQuery({
//   baseUrl: '/',
//   prepareHeaders: (headers, { getState }) => {
//     // By default, if we have a token in the store, let's use that for authenticated requests
//     const token = (getState() as RootState).auth.token;
//     if (token) {
//       headers.set('authentication', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

const baseQuery = () => {
	return fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}
			return headers
		}
	})
}

// eslint-disable-next-line import/prefer-default-export
export const entryApi = createApi({
	reducerPath: 'entryApi',
	baseQuery: baseQuery(),
	tagTypes: ['Entries', 'ReadThisWeek', 'Groups'],
	endpoints: (build) => ({
		login: build.mutation<{user:UserDetailResponse, token: string}, LoginRequest>({
			query: (credentials) => ({
				url: 'login',
				method: 'POST',
				body: credentials,
			}),
		}),
		getEntries: build.query<EntryResponse[], void>({
			query: () => `entries`,
			// Provides a list of `Posts` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
			providesTags: (result) => providesList(result, 'Entries'),
		}),
		getEntryById: build.query<Entry, string>({
			query: (id) => `entries/${id}`,
			providesTags: (result, error, id) => [{ type: 'Entries', id}]
		}),
		createEntryForId: build.mutation<Entry, CreateEntryDto>({
			query: (body) => ({
				url: '/entries',
				method: 'POST',
				body: {
					...body,
				},
			}),
			invalidatesTags: [{ type: 'Entries', id: 'LIST' }, 'ReadThisWeek'],
		}),
		editEntryById: build.mutation<Entry, UpdateEntryDto>({
			query: ({ id, ...body }) => ({
				url: `/entries/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, {id}) => [{type: 'Entries', id}]
		}),
		getReadThisWeek: build.query<number, void>({
			query: () => '/entries/thisWeek/e4e59bbc-5567-4dc8-a4a4-35c879166aed',
			providesTags: ['ReadThisWeek']
		}),
		getStudentScore: build.query<number,void>({
			query: () => '/entries/score/e4e59bbc-5567-4dc8-a4a4-35c879166aed',
		}),
		getGroupById: build.query<GroupDetailedResponse, string>({
			query: (id) => `/groups/${id}`,
			providesTags: (result, error, id) => [{ type: 'Groups', id}]
		}),
		getStudentById: build.query<StudentResponse, string>({
			query: (id) => `/students/${id}`
		}),
		getStudentEntries: build.query<StudentEntryResponse, string>({
			query: (id) => `/students/${id}/entries`,
			providesTags: (result) => providesList(result?.entries, 'Entries')
		})
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
} = entryApi;
