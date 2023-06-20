import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WebSocket from 'faye-websocket';
import Timer from './components/Timer';
import UsernameModal from './components/UsernameModal';
import {
  Wrapper,
  ResultsContainer,
  AverageScore,
  CardSection,
  Card,
} from './PlanningPoker.styled';

const PlanningPoker = ({
  testId,
  className,
  cards,
}) => {
  console.log(WebSocket);
  const [username, setUsername] = useState();
  const averageScore = 0;
  return (
    <Wrapper className={className} data-test-id={testId && `${testId}-planning-poker`}>
      <Timer />
      <ResultsContainer>Results
        <AverageScore>{averageScore}</AverageScore></ResultsContainer>
      <UsernameModal username={username} setUsername={setUsername} />
      <CardSection>
        {cards.map(card => (
          <Card>{card}</Card>
        ))}
      </CardSection>
    </Wrapper>
  );
};

PlanningPoker.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  cardsArray: PropTypes.shape([]),
};

PlanningPoker.defaultProps = {
  testId: 'planning-poker',
  className: null,
  cards: [1, 2, 3, 5, 8, 13, '?', 'coffee']
};

export default PlanningPoker;
