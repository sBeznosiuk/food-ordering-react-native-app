import {Category} from './Category';

export class CartFood {
  public id: number;
  public name: string;
  public photo: string;
  public price: number;
  public gallery: string[];
  public category?: Category;
  public quantity: number;

  public constructor(id: number, name: string, photo: string, price: number, gallery: string[], quantity: number, category?: Category) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.price = price;
    this.gallery = gallery;
    this.category = category;
    this.quantity = quantity;
  }
}
