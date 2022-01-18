import React from 'react';
import {
  Wrapper,
  Text,
  TextMessage,
  TextMessagePart,
} from './styled/WellcomeMessage.styled';

export default function WellcomeMessage() {
  return (
    <Wrapper>
      <Text>
        <TextMessage>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </TextMessage>
        <TextMessagePart>
          Ты не можешь тратить деньги, пока их у тебя нет
        </TextMessagePart>
      </Text>
    </Wrapper>
  );
}
