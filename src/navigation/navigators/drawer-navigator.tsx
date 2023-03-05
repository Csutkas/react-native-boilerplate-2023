import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useTranslationsContext } from '../../localization';
import { ContactScreen, FavoritesScreen, HelpScreen, LoginScreen, SearchStationsScreen, SettingsScreen } from '../../screens';

import { DrawerNavigatorParamList } from '../types/navigator-types';

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

export const DrawerNavigator = (): JSX.Element => {
  const { translations } = useTranslationsContext();
  // if (!isAppReady) {
  //   return null;
  // }

  return (
    <Drawer.Navigator initialRouteName='FavouritesScreenRoute' id={'DrawerStack'} screenOptions={{ headerShown: true }}>
      <Drawer.Screen name='FavouritesScreenRoute' options={{ title: translations.FAVORITES }} component={FavoritesScreen} />
      <Drawer.Screen name='SearchStationsScreenRoute' options={{ title: translations.STATIONS }} component={SearchStationsScreen} />
      <Drawer.Screen name='SettingsScreenRoute' options={{ title: translations.SETTINGS }} component={SettingsScreen} />
      <Drawer.Screen name='HelpScreenRoute' options={{ title: translations.HELP }} component={HelpScreen} />
      <Drawer.Screen name='ContactScreenRoute' options={{ title: translations.CONTACT }} component={ContactScreen} />
      <Drawer.Screen name='LoginScreenRoute' options={{ title: translations.LOGIN }} component={LoginScreen} />
    </Drawer.Navigator>
  );
};
