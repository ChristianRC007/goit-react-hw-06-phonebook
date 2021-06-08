import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

import './Filter.scss';

const Filter = ({ value, onChange, isAppeared }) => {
  return (
    <CSSTransition
      in={isAppeared > 1}
      timeout={200}
      classNames="pop"
      unmountOnExit
    >
      <label className="filter">
        <span>Find contacts by name</span>
        <input
          className="filter__input"
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </CSSTransition>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
  isAppeared: state.phonebook.contacts.length,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
