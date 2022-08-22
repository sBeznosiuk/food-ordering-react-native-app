import React, {useContext} from 'react';

import {RootStore} from './RootStore';

export const StoreContext =
  React.createContext<RootStore | null>({} as RootStore);

export const useStore = () => useContext(StoreContext);
