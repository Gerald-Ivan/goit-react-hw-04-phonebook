import { useState } from "react"
import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {
  // state = {
  //   contacts: [],
  //   filter: ''
  // } 
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts((prevContacts) => [...prevContacts, newContact]
    );
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newContact]
    // }));
  };

  const deleteContact = id => {
    setContacts((prevContacts) =>  prevContacts.filter(contact => contact.id !== id)
    )
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== id),
    // }));
  };
  //setFilter function changed to changeFilter
  const changeFilter = filterValue => {
    setFilter(filterValue)
    // this.setState({
    //   filter: filterValue,
    // });
  };

  const filterContact = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLowerCase)
    
    // const { contacts, filter } = this.state;
    // const filterLowerCase = filter.toLowerCase();
    // return contacts.filter(contact =>
    // contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

    // const {contacts, filter} = this.state;
    return (
      <>
      <ContactForm addContact={addContact} contacts={contacts}/>
      <Filter filter={filter} changeFilter={changeFilter}/>
      <ContactList filterContact={filterContact}
          deleteContact={deleteContact}/>
      
      </>
    )

}
    