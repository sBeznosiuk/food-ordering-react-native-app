import {configure} from 'mobx';
import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import {Loader} from './components/Loader';
import {InternetInformation} from './InternetInformation';
import {AppNavigation} from './navigations/AppNavigation';
import {
  initializeRootStore,
  RootStore,
} from './store/RootStore';
import {StoreContext} from './store/StoreContext';
import {ThemeProvider} from './utils/themes/themes';
import {
  createTranslationInstance,
  TranslationProvider,
} from './utils/TranslationContext';

configure({
  enforceActions: 'never',
});

export const App: FC = () => {
  const [loading, setLoading] = useState(true);
  const rootStore = useRef<null | RootStore>(null);

  const onAppMount = async () => {
    try {
      const store = await initializeRootStore();
      await createTranslationInstance();

      rootStore.current = store;
      setLoading(false);
    } catch (e) {
    } finally {
      SplashScreen.hide();
    }
  };

  useEffect(() => {
    onAppMount();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TranslationProvider>
        <StoreContext.Provider value={rootStore.current}>
          <ThemeProvider>
            <InternetInformation>
              <AppNavigation />
            </InternetInformation>
          </ThemeProvider>
        </StoreContext.Provider>
      </TranslationProvider>
    </GestureHandlerRootView>
  );
};
