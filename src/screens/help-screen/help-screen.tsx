import { Text, View } from 'react-native';
import { CommonSafeArea } from '../../common-ui';

import styles from './styles';

export const HelpScreen = () => {
  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Help screen</Text>
      </View>
    </CommonSafeArea>
  );
};
