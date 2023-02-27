// import { useSelector } from "react-redux";
// import { getAllContacts } from "redux/contacts/contacts-selectors";
// import { getFilteredContacts } from "redux/filter/filter-selectors";

// // import PropTypes from "prop-types";
// import ContactItem from '../ContactsItem/ContactsItem';
// import styles from './contact-list.module.css'

// const ContactList = () => {

//   const contacts = useSelector(getAllContacts);
//   // const filter = useSelector(getFilteredContacts);

//   return (
//     <>
//      {contacts.length === 0 && (
//         <p>There is no such contact</p>
//       )}
//        <ul className={styles.list}>
//       {contacts.map(({ id, name, number }) => {
//           <ContactItem
//             key={id}
//             name={name}
//             number={number}
//           />

//       })}
//     </ul>
//     </>

//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import styles from './contact-list.module.css';

import ContactItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();

    console.log(contacts);

    const result = contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizeFilter)
    );
    return result;
  };


  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts.length === 0 && <p>There is no such contact</p>}
      <ul className={styles.list}>
        {visibleContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};
export default ContactList;