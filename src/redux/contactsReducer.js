import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
  contact: {
    name: '',
    number: '',
  },
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

    setContactEnter: (state, { payload }) => {
      state.contact = { ...state.contact, [payload.name]: payload.value };
    },

    setInputEmpty: (state, { payload }) => {
      state.contact = payload;
    },
  },
});

export const {
  setAddNewContact,
  setDeleteContact,
  setContactFilter,
  setContactEnter,
  setInputEmpty,
  setLocalStorage,
} = contactsActionsSlice.actions;

export const contactsReducer = contactsActionsSlice.reducer;
