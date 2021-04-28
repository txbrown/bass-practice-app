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
import Box from '../components/Box';
import Container from '../components/Container';
import LessonCard from '../components/LessonCard';
import PlanProgress from '../components/PlanProgress';
import Quote from '../components/Quote';
import TabBarItem from '../components/TabBarItem';
import {userPlan} from '../lib/mock-data/plans';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 16,
  },
  tabBar: {backgroundColor: 'black'},
});

const initialLayout = {
  width: Dimensions.get('window').width,
};

export const defaultRoutes = [
  {key: 'mon', title: 'MON'},
  {key: 'tue', title: 'TUE'},
  {key: 'wed', title: 'WED'},
  {key: 'thu', title: 'THU'},
  {key: 'fri', title: 'FRI'},
  {key: 'sat', title: 'SAT'},
  {key: 'sun', title: 'SUN'},
];

export const getTabBarItemTitle = (
  currentIndex: number,
  index: number,
  route: Route,
  day: number,
  month: number,
): string | undefined => {
  return currentIndex !== index ? route.title : `${day}/${month}`;
};

export const getStatus = (weekDay: number, index: number) => {
  if (weekDay === index + 1) {
    return 'today';
  }

  return 'empty';
};

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
  <Box style={[styles.scene]} backgroundColor="#ff4081" />
);

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [routes] = React.useState(defaultRoutes);

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
        style={styles.tabBar}
        renderTabBarItem={({route}) => {
          const index = routes.findIndex((r) => r.key === route.key);
          const today = new Date();
          // coerce sunday to 7
          const weekDay = today.getDay() || 7;

          const day = today.getDate();
          const month = today.getMonth() + 1;

          return (
            <TouchableOpacity
              onPress={() => setCurrentIndex(index)}
              key={route.key}>
              <TabBarItem
                title={getTabBarItemTitle(
                  currentIndex,
                  index,
                  route,
                  day,
                  month,
                )}
                status={getStatus(weekDay, index)}
              />
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <Container>
      <Box p={16}>
        <PlanProgress userPlan={userPlan} />
      </Box>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index: currentIndex, routes}}
        renderScene={renderScene}
        onIndexChange={setCurrentIndex}
        initialLayout={initialLayout}
      />
    </Container>
  );
};

export default HomeScreen;
