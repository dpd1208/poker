import styled from 'styled-components';

const Wrapper = styled.div`
  height: 1000px;
  display: flex:
  flex-flow: row no-wrap;
`;

const ResultsContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const AverageScore = styled.div`
  display: flex;
  font-size: 16px;
  color: black;
`;

const CardSection = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  font-size: 16px;
  color: black;
`;

export {
  Wrapper,
  ResultsContainer,
  AverageScore,
  CardSection,
  Card,
};
