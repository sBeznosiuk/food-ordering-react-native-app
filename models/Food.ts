import {Category} from './Category';

export interface Food {
  id: number;
  name: string;
  photo: string;
  price: number;
  gallery: string[];
  category?: Category;
}
