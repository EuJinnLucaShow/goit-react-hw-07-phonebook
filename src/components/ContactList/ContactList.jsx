import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFilteredContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactItem from '../ContactItem/ContactItem';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} contact={{ id, name, number }} />
      ))}
      {filteredContacts.length === 0 && (
        <p>The Phonebook is empty. Add your first contact. 🫤</p>
      )}
    </ul>
  );
}

export default ContactList;
