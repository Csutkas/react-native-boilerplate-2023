import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

type StylesType = {
  container: StyleProp<ViewStyle>;
};
type NamedStylesType = StylesType & StyleSheet.NamedStyles<unknown>;

export const styles = (props: { backgroundColor: string }): NamedStylesType => {
  const commonStyle: NamedStylesType = {
    container: {
      flex: 1,
      backgroundColor: props.backgroundColor,
    },
  };
  return StyleSheet.create(commonStyle);
};
