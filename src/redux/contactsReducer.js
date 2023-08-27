import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
};

const contactsActionsSlice = createSlice({
  name: 'contactsActions',
  initialState,

  reducers: {
    setAddNewContact: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },

    setDeleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },

    setContactFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const {
  setAddNewContact,
  setDeleteContact,
  setContactFilter,
  setContactEnter,
} = contactsActionsSlice.actions;

export const contactsReducer = contactsActionsSlice.reducer;
