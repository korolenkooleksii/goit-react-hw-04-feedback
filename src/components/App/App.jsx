import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { Container } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  function handleChangeFeedback(value) {

    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }

    setTotal(prevState => prevState + 1);
  }

  function countPositiveFeedbackPercentage() {
    let countPositiveFeedback = (good * 100) / total;
    return Math.round(countPositiveFeedback) + '%';
  }

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions onClickVariant={handleChangeFeedback} />
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      )}
    </Container>
  );
}
