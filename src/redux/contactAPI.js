import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactAPI = createApi({
  reducerPath: 'contact',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63da6ba5b28a3148f686d43d.mockapi.io',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    fetchAll: builder.query({
      query: () => '/contacts',
      providesTags: ['contact'],
    }),
    postContact: builder.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const {
  useFetchAllQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} = contactAPI;
