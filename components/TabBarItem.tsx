import * as React from 'react';
import {Caption} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/src/types';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {theme} from '../lib/theme';

type Status = 'today' | 'completed' | 'empty';

interface ITabBarItemProps {
  status: Status;
  title?: string;
}

const Wrapper = styled.View`
  align-items: center;
  padding: 16px;
`;

const Dot = styled.View<{selected?: boolean} & Theme>`
  background: ${(props) =>
    props.selected ? theme.colors.primary : 'transparent'};
  width: 10px;
  height: 10px;
  border-radius: 25px;
  border-width: 1px;

  ${(props) =>
    props.selected &&
    `
  border-color: ${theme.colors.primary};
  `}

  ${(props) =>
    !props.selected &&
    `
  border-color: white;
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
      <Caption style={{color: 'white'}}>{title}</Caption>
    </Wrapper>
  );
};

export default TabBarItem;
