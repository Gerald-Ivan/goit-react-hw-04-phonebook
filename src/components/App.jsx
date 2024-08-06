import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
    
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setFilter = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  render() {
    const {contacts, filter} = this.state;
    return (
      <>
      <ContactForm addContact={this.addContact} contacts={contacts}/>
      <Filter filter={filter} setFilter={this.setFilter}/>
      <ContactList filterContact={this.filterContact}
          deleteContact={this.deleteContact}/>
      
      </>
    )
  }
}
    