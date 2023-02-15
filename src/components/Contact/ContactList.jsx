import PT from 'prop-types';
import { ContactItem } from './ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <div className={css.wrap}>
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
    </div>
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
