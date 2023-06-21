import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { setContactsFilter } from '../../redux/filterSlice';
import { Input } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={useSelector(getFilter)}
      onChange={handleFilterChange}
      disabled={useSelector(getContacts).length === 0}
    />
  );
}

export default Filter;
