import { Text, View } from 'react-native';
import { CommonSafeArea } from '../../../../common-ui';
import styles from './styles';

export const TableScreen = () => {
  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Table screen</Text>
      </View>
    </CommonSafeArea>
  );
};
