import 'react-native-gesture-handler/jestSetup';
import {Route} from 'react-native-tab-view';
import {defaultRoutes, getStatus, getTabBarItemTitle} from '../HomeScreen';

describe('getStatus', () => {
  it('should return  "today" status', () => {
    // setup
    const today = new Date();
    // coerce sunday to 7
    // 0 - Sunday; 1 - Monday, 2 - Tuesday...
    const weekDay = today.getDay() || 7;

    const weekDayIndex = weekDay - 1;

    // act
    const status = getStatus(weekDay, weekDayIndex);

    // assert
    expect(status).toBe('today');
  });

  it('should return  "empty" status', () => {
    // setup
    const today = new Date();

    const weekDay = today.getDay() || 7;

    const weekDayIndex = 0;

    // act
    const status = getStatus(weekDay, weekDayIndex);

    // assert
    expect(status).toBe('empty');
  });
});

describe('getTabBarItemTitle', () => {
  it('should return "day/month" title when current route is selected', () => {
    // setup
    const index = 0;
    const currentIndex = 0;
    const currentRoute = defaultRoutes[index];

    const route: Route = {
      title: currentRoute.title,
      key: currentRoute.key,
    };

    const day = 1;
    const month = 2;

    const expectedRouteTitle = `${day}/${month}`;

    // act
    const title = getTabBarItemTitle(currentIndex, index, route, day, month);

    // assert
    expect(title).toBe(expectedRouteTitle);
  });

  it('should return route title when current route is not selected', () => {
    // setup
    const index = 1;
    const currentIndex = 0;
    const currentRoute = defaultRoutes[index];

    const route: Route = {
      title: currentRoute.title,
      key: currentRoute.key,
    };

    const day = 1;
    const month = 2;

    // act
    const title = getTabBarItemTitle(currentIndex, index, route, day, month);

    // assert
    expect(title).toBe(route.title);
  });
});
