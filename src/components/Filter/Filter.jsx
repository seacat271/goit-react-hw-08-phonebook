import { changeFilter } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const dispatchFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <TextField
       
        type="search"
        value={value}
        onChange={dispatchFilter}
        variant="outlined"
        label="Search"
        id="outlined-password-input"
      />
    </label>
  );
};

export default Filter;
