import {CartStore} from './CartStore';
import {FavoritesStore} from './FavoritesStore';
import {FoodsStore} from './FoodsStore';
import {HistoryStore} from './HistoryStore';
import {UserStore} from './UserStore';

export class RootStore {
  public userStore: UserStore;
  public historyStore: HistoryStore;
  public foodsStore: FoodsStore;
  public favoritesStore: FavoritesStore;
  public cartStore: CartStore;

  public constructor() {
    this.userStore = new UserStore();
    this.foodsStore = new FoodsStore();
    this.favoritesStore = new FavoritesStore();
    this.cartStore = new CartStore();
    this.historyStore = new HistoryStore(this);
  }
}

export const initializeRootStore = async () => {
  const rootStore = new RootStore();

  await rootStore.userStore.authCheck();

  return rootStore;
};
