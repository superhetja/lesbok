import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { Entry } from '../lib/types';


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

// eslint-disable-next-line import/prefer-default-export
export const entryApi = createApi({
	reducerPath: 'entryApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ['Entries'],
	endpoints: (build) => ({
		getEntries: build.query<Entry[], void>({
			query: () => `entries`,
			// Provides a list of `Posts` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
			providesTags: (result) =>
			// is result available?
			result
			? // successful query
			[
				...result.map(({ id }) => ({ type: 'Entries', id } as const)),
				{ type: 'Entries', id: 'LIST' },
			]
		: // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
			[{ type: 'Entries', id: 'LIST' }],
		}),
		createEntryForId: build.mutation<Entry, Partial<Entry>>({
			query: (body) => ({
				url: '/entries',
				method: 'POST',
				body: {
					student_id: '5',
					registered_by: '5',
					date_of_entry: "2022-03-19",
					...body
				},
			}),
			invalidatesTags: [{ type: 'Entries', id: 'LIST' }],
		}),
		editEntryById: build.mutation<Entry, Partial<Entry>>({
			query: ({ id, ...body }) => ({
				url: `/entries/${id}`,
				method: 'PUT',
				body,
			}),
		}),
	}),
});

export const {
	useGetEntriesQuery,
	useCreateEntryForIdMutation,
	useEditEntryByIdMutation,
} = entryApi;
