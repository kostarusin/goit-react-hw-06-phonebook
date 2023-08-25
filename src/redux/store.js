import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer';

export const store = configureStore({
  reducer: { contactsActions: contactsReducer },
});
