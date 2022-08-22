import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';

import {Food} from '../models/Food';
import {CartFood} from './../models/CartFood';

export class FavoritesStore {
  public foods: Food[] = [];

  public constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'Favorites',
      properties: ['foods'],
      storage: AsyncStorage,
    });
  }

  public addToFavorites(food: Food) {
    this.foods.push(food);
  }

  public removeFromFavorites(foodId: number) {
    const index = this.foods.findIndex(
      ({id}) => id === foodId,
    );

    if (index >= 0) {
      this.foods.splice(index, 1);
    }
  }

  public handleToggleFavorite(item: CartFood | Food) {
    const itemIsInFavorites = this.itemIsInFavorites(
      item.id,
    );

    if (!itemIsInFavorites) {
      this.addToFavorites(item);
    } else {
      this.removeFromFavorites(item.id);
    }
  }

  public itemIsInFavorites(foodId: number) {
    return this.foods.some(({id}) => id === foodId);
  }
}
