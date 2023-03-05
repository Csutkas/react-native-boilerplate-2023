import { NavigatorScreenParams } from '@react-navigation/native';

export type DrawerNavigatorParamList = {
  FavouritesScreenRoute: undefined;
  SearchStationsScreenRoute: undefined;
  SettingsScreenRoute: undefined;
  HelpScreenRoute: undefined;
  ContactScreenRoute: undefined;
  LoginScreenRoute: undefined;
};

export type StationNavigatorParamList = {
  StationRoute: undefined;
  LiveRoute: undefined;
  ChartRoute: undefined;
  TableRoute: undefined;
};

export type RootNavigatorParamList = {
  DrawerNavigatorRoute: NavigatorScreenParams<DrawerNavigatorParamList>;
  StationNavigatorRoute: NavigatorScreenParams<StationNavigatorParamList>;
};
export type RootNavigatorRouteName = keyof RootNavigatorParamList;
