import { Text, View } from 'react-native';
import { CommonSafeArea } from '../../common-ui';

import styles from './styles';

export const LoginScreen = () => {
  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Login screen</Text>
      </View>
    </CommonSafeArea>
  );
};
