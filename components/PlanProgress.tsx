import * as React from 'react';
import {View} from 'react-native';
import {Caption, ProgressBar, Title} from 'react-native-paper';
import styled from 'styled-components/native';
import {theme} from '../lib/theme';

interface IPlanProgressProps {
  userPlan: Plans.UserPlan;
}

const Wrapper = styled.View``;

const ProgressWrapper = styled.View``;

const PlanProgress: React.FunctionComponent<IPlanProgressProps> = ({
  userPlan,
}) => {
  const progressInfo = `${userPlan.sessionsCompleted} of ${userPlan.sessionsCount} session`;

  return (
    <Wrapper>
      <Title>{userPlan.title}</Title>
      <ProgressWrapper>
        <View>
          <ProgressBar progress={0.5} color={theme.colors.accent} />
        </View>
        <Caption>{progressInfo}</Caption>
      </ProgressWrapper>
    </Wrapper>
  );
};

export default PlanProgress;
