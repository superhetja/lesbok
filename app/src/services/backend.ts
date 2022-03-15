import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { Entry } from '../lib/types';

// eslint-disable-next-line import/prefer-default-export
export const backendApi = createApi({
	reducerPath: 'backendApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getEntriesById: builder.query<Entry, string>({
			query: (id) => `entries/${id}`,
		}),
		createEntryForId: builder.query<Entry, string>({
			query: (body) => ({
				url: '/entries',
				method: 'POST',
				body,
			}),
		}),
		editEntryById: builder.query<Entry, string>({
			query: (body) => ({
				url: '/entries',
				method: 'PUT',
				body,
			}),
		}),
	}),
});

export const {
	useGetEntriesByIdQuery,
	useCreateEntryForIdQuery,
	useEditEntryByIdQuery,
} = backendApi;
