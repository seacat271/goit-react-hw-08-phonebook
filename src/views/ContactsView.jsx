import ContactList from '../components/ContactList/ContactList';
import { Form } from '../components/Form/Form';
import Section from '../components/Section/Section';
import Filter from '../components/Filter/Filter';
import { Container } from '@mui/material';

const ContactsView = () => {
    return(
        <Container sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e0f0f9", height: "100vh", p: 2,  }}>
        <Form />
        <Filter />
        <ContactList />
      </Container>
    )
}

export default ContactsView;