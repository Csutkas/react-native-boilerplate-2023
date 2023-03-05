import { Text, View } from 'react-native';
import { CommonSafeArea } from '../../../../common-ui';
import styles from './styles';

export const LiveScreen = () => {
  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Live screen</Text>
      </View>
    </CommonSafeArea>
  );
};
