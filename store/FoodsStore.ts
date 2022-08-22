import {action, makeAutoObservable} from 'mobx';

import {FoodCategory} from '../dto/FoodCategory';
import {FoodItem} from '../dto/FoodItem';
import {Food} from './../models/Food';
import {httpApi} from './api';

export class FoodsStore {
  public foods: Food[] = [];
  public foodsByQueryValue: Food[] = [];
  public categories: {id: number; title: string}[] = [];
  public selectedCategory: number = 1;

  public get foodsByQuery() {
    return this.foodsByQueryValue.slice();
  }

  public constructor() {
    makeAutoObservable(this, {
      setFoodsByQuery: action.bound,
    });
  }

  public fetchFoodInformation = async () => {
    const foodFetch = httpApi.get<{data: FoodItem[]}>(
      '/foods',
      {
        params: {
          populate: '*',
        },
      },
    );
    const fetchCategories = httpApi.get<{
      data: FoodCategory[];
    }>('/categories');

    try {
      const [food, ctgr] = await Promise.all([
        foodFetch,
        fetchCategories,
      ]);

      const foods = food.data.data.map(mapToFood);
      const categories = ctgr.data.data.map(mapToCategory);

      this.foods = foods;
      this.categories = categories;
    } catch (error) {
      throw new Error(`error: ${error}`);
    }
  };

  public fetchFoodsByCategory = async (
    categoryId: number,
  ) => {
    try {
      const {data} = await httpApi.get<{data: FoodItem[]}>(
        '/foods?populate=*',
      );

      const foods: Food[] = data.data.map(mapToFood);

      const foodsByCategory = foods.filter(
        ({category}) => category?.id === categoryId,
      );

      this.foods = foodsByCategory;
      this.selectedCategory = categoryId;
    } catch (error) {
      throw new Error(`error: ${error}`);
    }
  };

  public setFoodsByQuery(text: string) {
    this.foodsByQueryValue = this.foods.filter(({name}) =>
      name.toLowerCase().includes(text.toLowerCase()),
    );
  }
}

const mapToFood = (item: FoodItem) => ({
  id: item.id,
  name: item.attributes.name,
  photo: item.attributes.photo,
  price: item.attributes.price,
  gallery: item.attributes.gallery,
  category: item.attributes.categories.data[0],
});

const mapToCategory = (category: FoodCategory) => ({
  id: category.id,
  title: category.attributes.name,
});
