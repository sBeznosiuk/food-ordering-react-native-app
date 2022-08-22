import {FoodItemCategory} from './FoodItemCategory';

export interface FoodItem {
  id: number;
  attributes: {
    name: string;
    photo: string;
    price: number;
    gallery: string[];
    categories: FoodItemCategory;
  };
}
