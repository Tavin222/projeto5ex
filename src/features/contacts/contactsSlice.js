// src/features/contacts/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    removeContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    updateContact: (state, action) => {
      const { id, newData } = action.payload;
      const index = state.findIndex(contact => contact.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...newData };
      }
    }
  }
});

export const { addContact, removeContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;
