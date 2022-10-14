import ContactList from '../components/ContactList/ContactList';
import { IForm } from '../components/Form/IForm';
import Filter from '../components/Filter/Filter';
import { Container } from '@mui/material';

const ContactsView = () => {
    return(
        <Container sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e0f0f9", height: "100vh", p: 2,  }}>
        <IForm buttonText ={"Add contact"}/>
        <Filter />
        <ContactList />
      </Container>
    )
}

export default ContactsView;