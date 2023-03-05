import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CommonSafeArea } from '../../common-ui';
import { RootNavigatorParamList } from '../../navigation';
import styles from './styles';

export const FavoritesScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigatorParamList, 'StationNavigatorRoute'>>();

  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Favorites screen</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('StationNavigatorRoute', { screen: 'StationRoute' })}>
          <Text>Station screen</Text>
        </TouchableWithoutFeedback>
      </View>
    </CommonSafeArea>
  );
};
