import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { setDeleteContact } from 'redux/contactsReducer';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(setDeleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={style.list}>
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li className={style.listEl} key={id}>
              {name}: {number}
              <div className={style.listBtnWrap}>
                <button
                  type="button"
                  className={style.listBtn}
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
