import types from './phonebook-types';
import { v4 as uuid } from 'uuid';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuid(),
    name,
    number,
  },
});
const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
