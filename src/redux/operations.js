import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../axiosRequests';

// Fetch all
export const fetchContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await API.fetchAll();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Add
export const addContact = createAsyncThunk(
  'contact/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await API.postContact(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Delete
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await API.deleteContact(contactId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
