import {CartFood} from './CartFood';

export class Order {
  id: number;
  address: string;
  createdAt: number;
  deliveryMethod: string;
  items: CartFood[];
  payment: string;
  phone: string;
  publishedAt: string;
  updatedAt: string;
  orderLogo: string;

  public constructor(
    id: number,
    address: string,
    createdAt: number,
    deliveryMethod: string,
    items: CartFood[],
    payment: string,
    phone: string,
    publishedAt: number,
    updatedAt: number,
    orderLogo: string,
  ) {
    this.id = id;
    this.address = address;
    this.createdAt = createdAt;
    this.deliveryMethod = deliveryMethod;
    this.items = items;
    this.payment = payment;
    this.phone = phone;
    this.publishedAt = new Date(publishedAt).toUTCString();
    this.updatedAt = new Date(updatedAt).toUTCString();
    this.orderLogo = orderLogo;
  }

  public get totalQuantity() {
    const qty = this.items.reduce((total: number, current: CartFood) => total + current.quantity, 0);
    return qty;
  }

  public get totalPrice() {
    const price = this.items.reduce((total: number, current: CartFood) => total + current.price * current.quantity, 0);
    return price;
  }
}
