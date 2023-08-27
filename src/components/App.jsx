import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAddNewContact,
  setDeleteContact,
  setContactFilter,
  getContacts,
  getFilter,
} from 'redux/contactsReducer';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addContact = (name, number) => {
    const contactExists = contacts.some(
      contact => contact.name === name && contact.number === number
    );

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { id: nanoid(), name, number };

    dispatch(setAddNewContact(newContact));
  };

  const deleteContact = id => {
    dispatch(setDeleteContact(id));
  };

  const handleFilter = event => {
    dispatch(setContactFilter(event.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onFilter={handleFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
