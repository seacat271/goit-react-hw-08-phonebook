import { changeFilter } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter)
  
  const dispatchFilter = event => {
    dispatch(changeFilter(event.currentTarget.value))
  };
  
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={dispatchFilter} />
    </label>
  );
};

export default Filter;


