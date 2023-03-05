import { Text, View } from 'react-native';
import { CommonSafeArea } from '../../common-ui';

import styles from './styles';

export const ContactScreen = () => {
  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Contact screen</Text>
      </View>
    </CommonSafeArea>
  );
};
