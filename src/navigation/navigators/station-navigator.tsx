import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChartScreen, LiveScreen, TableScreen } from '../../screens';

import { StationScreen } from '../../screens/station-screen/station-screen';

import { StationNavigatorParamList } from '../types/navigator-types';

const Stack = createStackNavigator<StationNavigatorParamList>();

export const StationNavigator = (): JSX.Element | null => {
  return (
    <Stack.Navigator initialRouteName='StationRoute' id={'StationStack'} screenOptions={{ headerShown: true }}>
      <Stack.Screen name='StationRoute' component={StationScreen} />
      <Stack.Screen name='LiveRoute' component={LiveScreen} />
      <Stack.Screen name='ChartRoute' component={ChartScreen} />
      <Stack.Screen name='TableRoute' component={TableScreen} />
    </Stack.Navigator>
  );
};
