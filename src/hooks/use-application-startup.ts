import { useMemo } from 'react';

import { RootNavigatorRouteName } from '../navigation';

interface ApplicationStartupValues {
  initialRouteName: RootNavigatorRouteName;
}

export const useApplicationStartup = (): ApplicationStartupValues => {
  const initialRouteName = useMemo<RootNavigatorRouteName>(() => {
    return 'DrawerNavigatorRoute';
  }, []);

  //   useEffect(() => {
  //     if (isAppReady) {
  //       SplashScreen.hide();
  //     }
  //   }, [isAppReady]);

  return useMemo<ApplicationStartupValues>(
    () => ({
      initialRouteName,
    }),
    [initialRouteName]
  );
};
