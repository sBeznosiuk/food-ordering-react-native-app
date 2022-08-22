import NetInfo from '@react-native-community/netinfo';
import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import {NoInternet} from './screens/home/NoInternet';

export const InternetInformation: FC<
  PropsWithChildren<{}>
> = ({children}) => {
  const [netInfo, setNetInfo] = useState(true);

  useEffect(
    () =>
      NetInfo.addEventListener(state =>
        setNetInfo(!!state.isConnected),
      ),

    [],
  );

  return netInfo ? <>{children}</> : <NoInternet />;
};
