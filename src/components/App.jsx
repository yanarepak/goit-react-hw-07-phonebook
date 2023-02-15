import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Contact/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ width: '550px', margin: '0 auto' }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filterContactsList} />
    </div>
  );
};

export default App;
