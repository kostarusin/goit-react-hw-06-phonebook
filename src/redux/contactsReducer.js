import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
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

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsActionsSlice.reducer
);

export const { setAddNewContact, setDeleteContact, setContactFilter } =
  contactsActionsSlice.actions;
