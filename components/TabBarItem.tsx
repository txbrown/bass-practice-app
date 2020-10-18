import * as React from 'react';
import {Caption} from 'react-native-paper';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

type Status = 'today' | 'completed' | 'empty';

interface ITabBarItemProps {
  status: Status;
  title: string;
}

const Wrapper = styled.View`
  align-items: center;
  padding: 16px;
`;

const Dot = styled.View<{selected?: boolean}>`
  background: ${(props) => (props.selected ? 'blue' : 'transparent')};
  width: 10px;
  height: 10px;
  border-radius: 25px;
  border-width: 1px;

  ${(props) =>
    props.selected &&
    `
  border-color: blue;
  `}

  ${(props) =>
    !props.selected &&
    `
  border-color: black;
  `}
`;

const CheckMarkWrapper = styled.View`
  border-radius: 25px;
  background: white;
  padding: 8px;
`;

const CheckMark = () => {
  return (
    <CheckMarkWrapper>
      <Icon name="checkmark" size={12} />
    </CheckMarkWrapper>
  );
};

const TabBarItem: React.FunctionComponent<ITabBarItemProps> = ({
  title,
  status,
}) => {
  const isToday = status === 'today';
  const isEmpty = status === 'empty';
  const isCompledted = status === 'completed';

  return (
    <Wrapper>
      {(isEmpty || isToday) && <Dot selected={isToday} />}
      {isCompledted && <CheckMark />}
      <Caption>{title}</Caption>
    </Wrapper>
  );
};

export default TabBarItem;
