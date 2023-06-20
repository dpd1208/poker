import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ seconds }) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <div>
      <h1>{timeLeft}</h1>
    </div>
  );
};

Timer.propTypes = {
  testId: PropTypes.string,
  seconds: PropTypes.number,
};

Timer.defaultProps = {
  testId: 'timer',
  seconds: 5,
};

export default Timer;
