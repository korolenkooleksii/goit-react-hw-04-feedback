import { ListStatistics, ElementStatistics } from './Statistics.styled';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ListStatistics>
      <ElementStatistics>Good: {good}</ElementStatistics>
      <ElementStatistics>Neutral: {neutral}</ElementStatistics>
      <ElementStatistics>Bad: {bad}</ElementStatistics>
      <ElementStatistics>Total: {total}</ElementStatistics>
      <ElementStatistics>
        Positive Feedback: {positivePercentage()}
      </ElementStatistics>
    </ListStatistics>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
