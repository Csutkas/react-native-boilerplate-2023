import { Text, View } from 'react-native';
import { CommonSafeArea } from '../../../../common-ui';
import styles from './styles';

export const ChartScreen = () => {
  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Chart screen</Text>
      </View>
    </CommonSafeArea>
  );
};
