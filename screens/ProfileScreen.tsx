import styled from 'styled-components/native';
import {Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

const Wrapper = styled.View`
  color: red;
`;

const ProfileScreen = () => {
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello ProfileScreen</Text>
      </SafeAreaView>
    </Wrapper>
  );
};

export default ProfileScreen;
