import shortid from 'shortid';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addNewContact: {
      reducer(store, action) {
        store.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: shortid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(store, action) {
      const index = store.findIndex(contact => contact.id === action.payload);
      store.splice(index, 1);
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
