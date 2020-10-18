import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Caption} from 'react-native-paper';
import {
  NavigationState,
  Route,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';
import LessonCard from '../components/LessonCard';
import PlanProgress from '../components/PlanProgress';
import Quote from '../components/Quote';
import TabBarItem from '../components/TabBarItem';
import {courses} from '../lib/courses';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 16,
  },
});

const FirstRoute = () => (
  <View style={[styles.scene]}>
    <Caption>TODAY</Caption>
    <Quote>
      Today's effort makes you who you'll be tomorrow. Give it your best.
    </Quote>

    <Caption>Training session</Caption>
    <LessonCard />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
);

const initialLayout = {
  width: Dimensions.get('window').width,
};

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

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<Route>;
    },
  ) => {
    return (
      <TabBar
        {...props}
        style={{backgroundColor: 'black'}}
        renderTabBarItem={({route}) => {
          const i = routes.findIndex((r) => r.key === route.key);
          const today = new Date();
          // coerce sunday to 7
          const weekDay = today.getDay() || 7;

          const getStatus = () => {
            if (weekDay === i + 1) return 'today';
            return 'empty';
          };

          return (
            <TouchableOpacity onPress={() => setIndex(i)} key={route.key}>
              <TabBarItem
                title={index !== i ? route.title : '16/10'}
                status={getStatus()}
              />
            </TouchableOpacity>
          );
        }}></TabBar>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 16}}>
        <PlanProgress
          userPlan={{
            sessionsCompleted: 7,
            sessionsCount: 48,
            title: courses[6],
          }}
        />
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
};

export default HomeScreen;
