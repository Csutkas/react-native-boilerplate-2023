import { Text, View } from 'react-native';
import { CommonSafeArea } from '../../common-ui';
import styles from './styles';

export const SearchStationsScreen = () => {
  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Search stations screen</Text>
      </View>
    </CommonSafeArea>
  );
};
