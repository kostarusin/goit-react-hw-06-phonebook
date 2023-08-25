import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = ({ onAddContact }) => {
  const contact = useSelector(store => store.contactsActions.contact);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({
      type: 'contactsActions/handleChange',
      payload: { name, value },
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = contact;
    onAddContact(name, number);
    dispatch({
      type: 'contactsActions/onAddContact',
      payload: { name: '', number: '' },
    });
  };

  const { name, number } = contact;
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.formLabel}>
          Name
          <input
            className={style.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={style.formLabel}>
          Number
          <input
            className={style.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>

        <button className={style.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
