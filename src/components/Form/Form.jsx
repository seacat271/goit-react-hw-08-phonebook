import { useState } from 'react';
import { useDispatch} from 'react-redux/es/exports';
import { addContact } from "../../redux/contacts/contactsOperations"
import { Box, Button, TextField, Typography } from '@mui/material';

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
          setName(value);
        break;
      case "number":
          setNumber(value);
        break;
      default:
        return;
  }
};

const reset = () => {
  setName("");
  setNumber("");
};

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(addContact({name, number}));
    reset()
  };




  return(<Box component="form" onSubmit={handleSubmit}>
    <label>
         <TextField
        value={name}
        onChange={handleChange}
        id="outlined-password-input"
        label="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        variant="outlined"
      />
    </label>
    <label>

      <TextField
        label="Number"
        id="outlined-password-input"
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        variant="outlined"
      />
    </label>
    <Button type="submit" variant="contained">
      <Typography>Add contact</Typography>
    </Button>
  </Box>)
}

