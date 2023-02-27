// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/contacts-slice';

// import styles from './contacts-item.module.css';
// // import PropTypes from "prop-types"

// const ContactItem = ({
//   id,
//   name,
//   number,
//   deleteContact
// }) => {
//     const dispatch = useDispatch();
//   return (
//     <li className={styles.item}>
//       <p className={styles.text}>
//         {name}: {number}
//       </p>
//       <button className={styles.btn} type="button" onClick={() => dispatch(deleteContact(id))}>
//         Delete
//       </button>
//     </li>
//   );
// };

// export default ContactItem;

// // ContactItem.propTypes = {
// //   id: PropTypes.string,
// //   name: PropTypes.string.isRequired,
// //   number: PropTypes.string.isRequired,
// // };

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-slice';
import styles from './contacts-item.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.item} key={id}>
      <p className={styles.text}>
        {name}: {number}
      </p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
