import { ButtonBlockWrap, Button } from './ButtonBlock.styled';

const ButtonBlock = ({
  firstButtonText,
  secondButtonText,
  firstButtonHandler,
  secondButtonHandler,
  firstButtonType,
  secondButtonType,
}) => {
  return (
    <ButtonBlockWrap>
      <Button type={firstButtonType} onClick={firstButtonHandler}>
        {firstButtonText}
      </Button>
      <Button type={secondButtonType} onClick={secondButtonHandler}>
        {secondButtonText}
      </Button>
    </ButtonBlockWrap>
  );
};

export default ButtonBlock;
