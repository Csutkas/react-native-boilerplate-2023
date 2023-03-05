import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CommonSafeArea } from '../../common-ui';
import { StationNavigatorParamList } from '../../navigation';
import styles from './styles';

export const StationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StationNavigatorParamList>>();

  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Station screen</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('LiveRoute')}>
          <Text>Live screen</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('ChartRoute')}>
          <Text>Chart screen</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('TableRoute')}>
          <Text>Table screen</Text>
        </TouchableWithoutFeedback>
      </View>
    </CommonSafeArea>
  );
};
