import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteContact, fetchContacts} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { getVisibleContacts } from 'redux/contacts/contactsSelector';
import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';

const ContactList = () => {
const dispatch = useDispatch();


useEffect(() => {
  dispatch(fetchContacts())
},[dispatch])
const visibleContacts = useSelector(getVisibleContacts)
if (!visibleContacts) return 
  return (
    <ul>
      {visibleContacts.map(({ name, id, number }) => (
        <li key={id}>
          <div>
            {name}: <span>{number}</span>
          </div>
          <Button variant="outlined" startIcon={<Delete />} onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
