import styled from 'styled-components';

const ModalWrapper = styled.div`
  height: 1000px;
  display: flex:
  flex-flow: row no-wrap;
`;

const UsernameTitle = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  padding-bottom: 10px;
`;

const UsernameField = styled.div`
  display: flex;
  font-size: 16px;
  color: black;
`;

const SubmitButton = styled.button`
  display: flex;
  font-size: 16px;
  color: black;
  background-color: green;
`;

export {
  ModalWrapper,
  UsernameTitle,
  Form,
  UsernameField,
  SubmitButton,
};
