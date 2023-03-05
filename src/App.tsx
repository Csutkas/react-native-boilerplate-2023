import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { TranslationsContextProvider } from './localization/translation.context';

import { RootNavigator } from './navigation/navigators/root-navigator';
import { persistor, store } from './redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <TranslationsContextProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </TranslationsContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
