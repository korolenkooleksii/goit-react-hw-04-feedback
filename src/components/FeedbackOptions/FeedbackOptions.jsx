import { ListButtons, Button, WrapButton } from './FeedbackOptions.styled';
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import { FaRegHandLizard } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { variantFeedbacks } from 'components/constans';

const FeedbackOptions = ({ onClickVariant }) => {
  const { good, neutral, bad } = variantFeedbacks;
  return (
    <ListButtons>
      <WrapButton>
        <Button
          type="button"
          onClick={() => onClickVariant(good)}
        >
          <BsHandThumbsUp />
          {good}
        </Button>
      </WrapButton>
      <WrapButton>
        <Button
          type="button"
          onClick={() => onClickVariant(neutral)}
        >
          <FaRegHandLizard />
          {neutral}
        </Button>
      </WrapButton>
      <WrapButton>
        <Button
          type="button"
          onClick={() => onClickVariant(bad)}
        >
          <BsHandThumbsDown />
          {bad}
        </Button>
      </WrapButton>
    </ListButtons>
  );
};

FeedbackOptions.propTypes = {
  onClickVariant: PropTypes.func.isRequired,
};

export default FeedbackOptions;
