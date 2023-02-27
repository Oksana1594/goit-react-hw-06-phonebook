import styles from './field-filter.module.css'
// import PropTypes from "prop-types";
// import { useSelector, useDispatch } from 'react-redux';

// import { getFilter } from 'redux/filter/filter-selectors';
// import { setFilter } from 'redux/filter/filter-slice';

// const FieldToFilter = () => {
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();
//   return (
//       <div className={styles.wrapper}>
//         <label className={styles.label}>
//             Find contacts by name
//             <input className={styles.input} type="text" value={filter}
//         onChange={e => dispatch(setFilter(e.target.value))} />
//       </label>
//       </div>
//     )
// }

// export default FieldToFilter;

// FieldToFilter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';


const FieldToFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
      <div className={styles.wrapper}>
    <label className={styles.label}>
      Find contacts by name
      <input
       className={styles.input}
        type="text"
        placeholder="Enter name..."
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
      </label>
      </div>
  );
};

export default FieldToFilter;