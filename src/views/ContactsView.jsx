import ContactList from '../components/ContactList/ContactList';
import { Form } from '../components/Form/Form';
import Section from '../components/Section/Section';
import Filter from '../components/Filter/Filter';

const ContactsView = () => {
    return(
        <>
        <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      </>
    )
}

export default ContactsView;