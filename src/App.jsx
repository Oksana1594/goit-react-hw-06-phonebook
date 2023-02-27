// import { useSelector, useDispatch } from 'react-redux';

// import Form from './components/Form/Form';
// import ContactList from './components/Contacts/ContactsList/ContactsList';
// import FieldToFilter from './components/FieldToFilter/FieldToFilter';
// import Title from './components/Shared/Title';
// import MainTitle from './components/Shared/MaineTitle';
// import Container from './components/Shared/Container';

// import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
// import { setFilter } from 'redux/filter/filter-slice';
// import { getAllContacts } from 'redux/contacts/contacts-selectors';
// import { getFilteredContacts } from 'redux/filter/filter-selectors';

// const App = () => {
//   const contacts = useSelector(getAllContacts);
//   const filteredContacts = useSelector(getFilteredContacts);
//   const filter = useSelector(setFilter);

//   const dispatch = useDispatch();

//   const isDublicate = (name, number) => {
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

//   const onAddContact = ({ name, number }) => {
//     if (isDublicate(name, number)) {
//       alert(`${name} number: ${number} is alredy in contacts`);
//       return false;
//     }

//     dispatch(addContact({ name, number }));
//   };

//   const handleDeleteContact = id => {
//     dispatch(deleteContact(id));
//   };

//   const changeFilter = ({ target }) => {
//     dispatch(setFilter(target.value));
//   };

//   // const filteredContacts = getFilteredContacts();
//   // const myFilteredContacts = id => {
//   //   dispatch(getFilteredContacts(id));
//   // };
//   const isContacts = Boolean(filteredContacts.length);

//   return (
//     <Container>
//       <MainTitle mainTitle="Phonebook " />
//       <Form onSubmit={onAddContact} />

//       <Title title="Contacts" />
//       <FieldToFilter value={filter}  handleChange={changeFilter}/>
//       {isContacts ? (
//         <ContactList deleteContact={handleDeleteContact} contacts={filteredContacts}
//         />
//       ) : (
//         <p className="massage">Your phonebook is empty. Please add contact.</p>
//       )}
//     </Container>
//   );
// };

// export default App;

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';

import Form from 'components/Form/Form';
import ContactList from 'components/Contacts/ContactsList/ContactsList';
import FieldToFilter from 'components/FieldToFilter/FieldToFilter';
import Container from 'components/Shared/Container';
import MainTitle from 'components/Shared/MaineTitle';
import Title from 'components/Shared/Title';

const App = () => {
  const contacts = useSelector(getContacts);

  const isContacts = Boolean(contacts.length);
  return (
    <Container>
      <MainTitle mainTitle="Phonebook " />
      <Form />
      <Title title="Contacts" />

      {isContacts && <FieldToFilter />}
      {isContacts && <ContactList />}

      {!isContacts && (
        <p className="massage">Your phonebook is empty. Please add contact.</p>
      )}
    </Container>
  );
};
export default App;
