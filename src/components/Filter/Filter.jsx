import { changeFilter } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Typography, Box } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const dispatchFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <Box component="label" sx={{display: "flex", justifyContent: "center", width: "70%"}}>
      <TextField
       
        type="search"
        value={value}
        onChange={dispatchFilter}
        variant="outlined"
        label="Search"
        id="outlined-password-input"
        sx={{marginRight: "10px"}}
      />
      <Typography variant="h5">
      Find contacts by name
      </Typography>
    </Box>
  );
};

export default Filter;
