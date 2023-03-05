import React, { memo, useMemo } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import COLORS from '../colors';
import { styles } from './styles';

interface CommonSafeAreaProps {
  children: JSX.Element;
  backgroundColor?: string;
}

export const CommonSafeArea = memo(({ children, backgroundColor = COLORS.BACKGROUND_100 }: CommonSafeAreaProps) => {
  const styleMemo = useMemo(
    () =>
      styles({
        backgroundColor,
      }),
    [backgroundColor]
  );

  return (
    <SafeAreaView style={styleMemo.container}>
      <>
        <StatusBar backgroundColor={backgroundColor} barStyle='dark-content' />
        {children}
      </>
    </SafeAreaView>
  );
});
