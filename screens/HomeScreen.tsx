import styled from 'styled-components/native';
import {
  Text,
  SafeAreaView,
  StatusBar,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Animated from 'react-native-reanimated';
import * as React from 'react';
import {
  TabView,
  SceneMap,
  TabBarProps,
  ScrollPager,
} from 'react-native-tab-view';
import {Title} from 'react-native-paper';
import TabBarItem from '../components/TabBarItem';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {format} from 'date-fns';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
);

const initialLayout = {
  width: Dimensions.get('window').width,
};

const TabBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'mon', title: 'MON'},
    {key: 'tue', title: 'TUE'},
    {key: 'wed', title: 'WED'},
    {key: 'thu', title: 'THU'},
    {key: 'fri', title: 'FRI'},
    {key: 'sat', title: 'SAT'},
    {key: 'sun', title: 'SUN'},
  ]);

  const renderScene = SceneMap({
    mon: FirstRoute,
    tue: SecondRoute,
    wed: FirstRoute,
    thu: FirstRoute,
    fri: FirstRoute,
    sat: FirstRoute,
    sun: FirstRoute,
  });

  const renderTabBar = (props: any) => {
    return (
      <TabBar>
        {props.navigationState.routes.map((route: any, i: number) => {
          const inputRange = props.navigationState.routes.map(
            (x: number, i: number) => i,
          );
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map((inputIndex: number) =>
                  inputIndex === i ? 255 : 0,
                ),
              }),
            ),
            0,
            0,
          );

          const today = new Date();
          // coerce sunday to 7
          const weekDay = today.getDay() || 7;

          const getStatus = () => {
            if (weekDay === i + 1) return 'today';
            return 'empty';
          };

          return (
            <TouchableOpacity onPress={() => setIndex(i)} key={props.key}>
              {index === i && (
                <Animated.View style={{backgroundColor: 'red', height: 16}} />
              )}
              <Animated.Text style={{color}}>
                <TabBarItem
                  title={index !== i ? route.title : '16/10'}
                  status={getStatus()}
                />
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </TabBar>
    );
  };

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      // renderPager={(props) => <ScrollPager {...props} />}
    />
  );
};

export default HomeScreen;
