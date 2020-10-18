import styled from 'styled-components/native';
import {Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

const Wrapper = styled.View`
  color: red;
`;

const HomeScreen = () => {
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello World</Text>
      </SafeAreaView>
    </Wrapper>
  );
};

export default HomeScreen;
