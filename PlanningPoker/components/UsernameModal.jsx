import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  ModalWrapper,
  UsernameTitle,
  Form,
  UsernameField,
  SubmitButton,
} from './general.styled';

const UsernameModal = ({
  testId,
  className,
  username,
  setUsername,
}) => {
  const [showModal, setShowModal] = useState(true);
  const formStateReducer = (prevState, updatedProperty) => {
    return {
      ...prevState,
      ...updatedProperty,
    };
  };
  const initialFormState = {
    value: username || '',
  };
  const [formState, setFormState] = useReducer(formStateReducer, { username: initialFormState });
  return (
    showModal &&
    <ModalWrapper className={className} data-test-id={testId && `${testId}-planning-poker`}>
      <UsernameTitle>Enter your username</UsernameTitle>
      <Form
        state={formState}
        setState={setFormState}
      >
        <UsernameField
          name="username-input-field"
          id="username-field"
          onChange={(e) => {
            setFormState({
              username: {
                value: e.target.value,
              }
            });
            setUsername(e.target.value);
          }}
          value={username}
          {...formState.username}
        />
        <SubmitButton onClick={() => setShowModal(false)} />
      </Form>
    </ModalWrapper>
  );
};

UsernameModal.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
};

UsernameModal.defaultProps = {
  testId: 'planning-poker',
  className: null,
};

export default UsernameModal;
