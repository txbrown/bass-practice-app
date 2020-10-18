import * as React from 'react';
import {Image} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';
import styled from 'styled-components/native';

interface ILessonCardProps {}

const Wrapper = styled.View`
  height: 260px;
  border-radius: 8px;
  position: relative;
`;

const Content = styled.View`
  position: absolute;
  bottom: 12px;
  left: 12px;
`;

const LessonCard: React.FunctionComponent<ILessonCardProps> = (props) => {
  return (
    <Wrapper>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1594438578199-53b5c0d08178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
        }}
        style={{height: 260, width: '100%', borderRadius: 8}}
        resizeMode="cover"
      />
      <Content>
        <Title
          style={{
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginBottom: 12,
          }}>
          Lesson title
        </Title>
        <Paragraph
          style={{
            color: 'white',
          }}>
          Lesson description
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

export default LessonCard;
