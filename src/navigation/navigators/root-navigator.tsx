import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { RootNavigatorParamList } from '../types/navigator-types';
import { DrawerNavigator } from './drawer-navigator';
import { StationNavigator } from './station-navigator';

const Stack = createStackNavigator<RootNavigatorParamList>();

export const RootNavigator = (): JSX.Element | null => {
  return (
    <Stack.Navigator initialRouteName='DrawerNavigatorRoute' id={'RootStack'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='DrawerNavigatorRoute' component={DrawerNavigator} />
      <Stack.Screen name='StationNavigatorRoute' component={StationNavigator} />
    </Stack.Navigator>
  );
};
