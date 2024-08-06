import { Component } from "react";
import { nanoid } from "nanoid";
import css from './contactForm.module.css'
export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    
      }
      handleChangeName = (e) => {
        this.setState({
          name: e.target.value,
        });
        
      }
      handleChangeNumber = (e) => {
        this.setState({
          number: e.target.value,
        });
      
      }
      handleSubmit = (e) => {
        e.preventDefault();
        const { number, name } = this.state;
        const { addContact, contacts } = this.props

        if (name.trim() === '' || number.trim() === '') {
          return;
        }
        
        const existingContact = contacts.find( contact => contact.name.toLowerCase() === name.toLocaleLowerCase());

       if (existingContact){
        alert(`${name} is already in contacts`);
        return;
       }

       addContact({
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
       });

       this.setState({ name: '', number: '' });
      }
   

  render() {
      const {number, name} = this.state;
    return (
      <>
      <h1>Phonebook</h1>
       <form className={css.contactForm} onSubmit={this.handleSubmit}>
        {/* name */}
      <label className={css.formLabel}>
        <p>Name</p>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
        required
        value={name}
        onChange={this.handleChangeName}
  
        />     
      </label>
   
      {/* telephone */}
      <label className={css.formLabel}>
        <p>Number</p>
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={this.handleChangeNumber}
        />
      </label>
      {/* submit */}
      <button type="submit" className={css.formBtn}>Add contact</button>
      </form>

      <h2>Contact</h2>
      </>
    )
  }
}
