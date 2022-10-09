import ContactList from './ContactList/ContactList';
import { Form } from './Form/Form';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { ContainerGlobal } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { RegisterView } from 'views/RegisterView';
import { ContactsView } from 'views/ContactsView';
import { LoginView } from 'views/LoginView';
import { AppBar } from './AppBar/AppBar';

export const App = () => {

  return (
    <ContainerGlobal>
    <AppBar/>
      <Routes>
        <Route exact path = "/" component ={HomeView} />
        <Route exact path = "/register" component ={RegisterView} />
        <Route exact path = "/login" component ={LoginView} />
        <Route exact path = "/contacts" component ={ContactsView} />
      {/* <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section> */}
    </Routes>
    </ContainerGlobal>
  );
}