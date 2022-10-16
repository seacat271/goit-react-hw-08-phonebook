import ContactList from '../components/ContactList/ContactList';
import { IForm } from '../components/Form/IForm';
import Filter from '../components/Filter/Filter';
import { Container, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types'

const ContactsView = () => {
  return (
    <Container
    sx={{
      height: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2,
      gap: '20px',
    }}
    >
      <Box component="div"
        sx={{
          width: '33%',
          height: '70%',
          textAlign: 'center',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          gap: '20px',
          borderRadius: "4px",
        }}>
        <Typography variant="h4" >
          Add contact
        </Typography>
      <IForm buttonText={'Add contact'} />
      </Box>
      <Box component="div"
        sx={{
          width: '60%',
          height: '70%',
          textAlign: 'center',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          gap: '20px',
          borderRadius: "4px",
        }}>
      <Filter />
      <ContactList />
      </Box>
      
    </Container>
  );
};

export default ContactsView;

ContactsView.propTypes = {
  buttonText: PropTypes.string.isRequired,
}
