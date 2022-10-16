import { useDispatch, useSelector } from 'react-redux/es/exports';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { getVisibleContacts } from 'redux/contacts/contactsSelector';
import { Delete } from '@mui/icons-material';
import { Button, Typography, Box } from '@mui/material';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const visibleContacts = useSelector(getVisibleContacts);
  if (!visibleContacts) return;
  return (
    <Box
      component="ul"
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflowY: "scroll",
        scrollBehavior: "smooth",
      }}
    >
      {visibleContacts.map(({ name, id, number }) => (
        <Box
          component="li"
          key={id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '70%',
            marginBottom: "10px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#1976d2",
            borderRadius: "4px",
            padding: "4px",
          }}
        >
          <Box component="div" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minWidth: "65%",
          }}>
            <Typography variant="h6" sx={{fontWeight: "700"}}>
              {name}: 
            </Typography>
            <Box component="span" sx={{
          }}><Typography variant="h6">
            {number}
          </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            startIcon={<Delete />}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default ContactList;
