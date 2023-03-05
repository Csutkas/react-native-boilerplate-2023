import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CommonSafeArea } from '../../common-ui';
import { useTranslationsContext } from '../../localization';
import { LANGUAGE_EN, LANGUAGE_HU } from '../../utils/constants';

import styles from './styles';

export const SettingsScreen = () => {
  const { setAppLanguage, translations } = useTranslationsContext();
  return (
    <CommonSafeArea>
      <View style={styles.container}>
        <Text>Settings screen</Text>
        <TouchableWithoutFeedback onPress={() => setAppLanguage(LANGUAGE_EN)}>
          <Text>{translations.ENGLISH}</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setAppLanguage(LANGUAGE_HU)}>
          <Text>{translations.HUNGARIAN}</Text>
        </TouchableWithoutFeedback>
      </View>
    </CommonSafeArea>
  );
};
