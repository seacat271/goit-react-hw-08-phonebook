import { Box, Button, TextField, Typography} from '@mui/material';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from 'redux/auth/authOperations';
import { addContact } from 'redux/contacts/contactsOperations';
import PropTypes from 'prop-types'


export const IForm = ({buttonText}) => {
const dispatch = useDispatch();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [number, setNumber] = useState("");
const params = {};

const fieldsCreator = (value) => {
    switch (value) {

    case "Login":
    params.fields = {email, password}
    params.action = (valueField) => login(valueField)
    params.reset = () => { setEmail(''); setPassword('');}
    return params;

    case "Registration":
    params.fields = {name, email, password}
    params.action = (valueField) => register(valueField)
    params.reset = () => {
        setName(''); 
        setEmail(''); 
        setPassword('');}
    return params;

    case "Add contact":
        params.fields = {name, number}
        params.action = (valueField) => addContact(valueField)
        params.reset = () => {
            setName(''); 
            setNumber('');}
    return params;

    
    default:
        return;
    }

}

fieldsCreator(buttonText)

const {fields, action, reset} = params;

const handleChange = event => {
  const { name, value } = event.target;
  switch (name) {
    case 'name':
        return setName(value);
    case 'email':
      return setEmail(value);
    case 'password':
      return setPassword(value);
    case "number":
        return setNumber(value);
   
    default:
      return;
  }
};

const handleSubmit = event => {
  event.preventDefault();
  dispatch(action(fields));
reset()
};

    return (<Box component="form" onSubmit={handleSubmit} sx={{gap: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "50%",}}>
      {Object.keys(fields).map(field => {
           return <label key= {field}>
           <TextField
             type="text"
             name={field}
             value = {fields[field]}
             onChange={handleChange}
             variant="outlined"
             label={field}
             id="outlined-password-input"
           />
         </label> 
        })}

        <Button variant="contained" type="submit">
          <Typography>{buttonText}</Typography>
        </Button>
      </Box>)
}

ContactsView.propTypes = {
  buttonText: PropTypes.string.isRequired,
}

