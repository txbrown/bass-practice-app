import * as React from 'react';
import {Caption} from 'react-native-paper';
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

interface DotProps {
  selected?: boolean;
}

const Dot = styled.View<DotProps>`
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

const StyledCaption = styled(Caption)`
  color: white;
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
  const isCompleted = status === 'completed';

  return (
    <Wrapper>
      {(isEmpty || isToday) && <Dot selected={isToday} />}
      {isCompleted && <CheckMark />}
      <StyledCaption>{title}</StyledCaption>
    </Wrapper>
  );
};

export default TabBarItem;
