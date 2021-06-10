import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from '../Notification';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    isExist: false,
  };

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.allContacts.find(({ name }) => name === this.state.name)) {
      this.setState({ name: '', number: '', isExist: true });
      const timer = setTimeout(() => {
        this.setState({ isExist: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form__lable">
            <span className="form__lable__text">Name</span>
            <input
              className="form__input"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="form__lable">
            <span className="form__lable__text">Number</span>
            <input
              className="form__input"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button className="form__button" type="submit">
            Add contact
          </button>
        </form>
        <Notification isExist={this.state.isExist} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  allContacts: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(phonebookActions.addContact(contact)),
});

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
