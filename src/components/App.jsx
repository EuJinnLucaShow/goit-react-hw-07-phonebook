import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, Heading2 } from './App.styled';

function App() {
  return (
    <Container>
      <Title>Phonebook📱</Title>
      <ContactForm />
      <Heading2>Contacts</Heading2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
