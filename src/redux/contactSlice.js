import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactSlice = createSlice({
  name: 'contact',
  initialState: { items: [], isloading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.items.push(...action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => action.payload.id !== contact.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;
