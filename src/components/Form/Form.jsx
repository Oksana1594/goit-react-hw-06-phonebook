// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { getAllContacts } from "redux/contacts/contacts-selectors";
// import { addContact } from "redux/contacts/contacts-slice";

// import styles from './form.module.css'
// // import PropTypes from 'prop-types'
// // import initialState from './initialState'

// const Form = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(getAllContacts);
//   const dispatch = useDispatch();
  
//   const handleChange = e => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "name":
//         setName(value);
//         break;

//       case "number":
//         setNumber(value);
//         break;

//       default: ;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     const isDublicate = (name, number) => {
//     const normalizedName = name.toLowerCase();
//     const normalizedNumber = number.toLowerCase();
//     const result = contacts.find(({ name, number }) => {
//       return (
//         name.toLowerCase() === normalizedName ||
//         number.toLowerCase() === normalizedNumber
//       );
//     });
//     return Boolean(result);
//   };

//      if (isDublicate) {
//        alert(`${name} number: ${number} is alredy in contacts`)
//        return;
//     }


//     dispatch(addContact(name, number));
//     setName('');
//     setNumber('');
//   };

//    return (
//       <form onSubmit={handleSubmit} className={styles.form}>
//       <label  className={styles.label}>
//         Name
//         <input className={styles.input}
//             type="text"
//             name="name"
//             placeholder="Taras Bulba"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={handleChange}
//              />
//             </label>
//             <label className={styles.label}>
//         Number
//         <input className={styles.input}
//              type="tel"
//             name="number"
//             placeholder="777-77-777"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={handleChange}
//              />
//       </label>
//       <button type="submit" className={styles.button}>Add contacts</button>
//       </form>
//         )
//     }

// export default Form;

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { Notify } from 'notiflix';
import styles from './form.module.css'

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isNameAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isNumberAdded = contacts.some(contact => contact.number === number);

    if (isNameAdded) {
      Notify.failure(`${name} is alredy in contacts`);
      return;
    } else if (isNumberAdded) {
      Notify.failure(`${number} is alredy in contacts`);
      return;
    }
    dispatch(addNewContact(name, number));
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          placeholder="Enter name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
           className={styles.input}
          type="tel"
          name="number"
          value={number}
          placeholder="Enter number..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add contacts
      </button>
    </form>
  );
};
export default Form;