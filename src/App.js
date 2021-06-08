import React, { Component } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Notification from './components/Notification';

class App extends Component {
  state = {
    isExist: false,
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  //   if (this.state.isExist !== prevState.isExist) {
  //     const timer = setTimeout(() => {
  //       this.setState({ isExist: false });
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }

  // addContact = ({ name, number }) => {
  //   const contact = { id: uuid(), name, number };

  //   if (this.state.contacts.find(contact => contact.name === name)) {
  //     this.setState({ isExist: true });
  //     return;
  //   }

  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, contact],
  //   }));
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // changeFilter = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

  render() {
    return (
      <Container>
        <h1 className="title">Phonebook</h1>
        <Notification isExist={this.state.isExist} />

        <ContactForm />
        <h2>Contacts</h2>

        <Filter />

        <ContactList />
      </Container>
    );
  }
}

export default App;
