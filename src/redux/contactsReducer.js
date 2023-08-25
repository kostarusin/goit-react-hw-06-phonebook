const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
  contact: {
    name: '',
    number: '',
  },
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contactsActions/newContact': {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    case 'contactsActions/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case 'contactsActions/handleFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case 'contactsActions/handleChange': {
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    case 'contactsActions/onAddContact': {
      return {
        ...state,
        contact: action.payload,
      };
    }

    default:
      return state;
  }
};
