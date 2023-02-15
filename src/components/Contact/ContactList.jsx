import PT from 'prop-types';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
       <ContactItem key={id}
       name={name}
       number={phone}
       id={id}/>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PT.arrayOf(
    PT.shape({
      id: PT.string.isRequired,
      name: PT.string.isRequired,
      phone: PT.string.isRequired,
    }).isRequired
  ).isRequired,

};
