import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';

import {CartFood} from '../models/CartFood';
import {Food} from '../models/Food';
import {DeliveryMethods} from './../screens/home/FoodCheckout';

export enum PaymentMethods {
  Card = 'card',
  BankAccount = 'bankAccount',
}

export class CartStore {
  public cart: CartFood[] = [];
  public paymentMethod: PaymentMethods =
    PaymentMethods.Card;
  public deliveryMethod: DeliveryMethods | null = null;

  public constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'Cart',
      properties: ['cart', 'paymentMethod'],
      storage: AsyncStorage,
    });
  }

  public addToCart(food: Food) {
    const foodIsInCart = this.cart.some(
      ({id}) => id === food.id,
    );

    if (foodIsInCart) {
      const cartFood = new CartFood(
        food.id,
        food.name,
        food.photo,
        food.price,
        food.gallery,
        0,
        food.category,
      );

      this.cart.push(cartFood);
    }
    this.increaseQuantity(food.id);
  }

  public removeFood = (foodId: number) => {
    const index = this.cart.findIndex(
      ({id}) => id === foodId,
    );

    if (index >= 0) {
      this.cart.splice(index, 1);
    }
  };

  public increaseQuantity(id: number) {
    const index = this.cart.findIndex(f => f.id === id);

    if (index >= 0) {
      this.cart[index].quantity =
        this.cart[index].quantity + 1;
    }
  }
  public decreaseQuantity(id: number) {
    const index = this.cart.findIndex(f => f.id === id);

    if (this.cart[index]?.quantity === 1) {
      this.removeFood(id);
    }
    if (index >= 0) {
      this.cart[index].quantity =
        this.cart[index].quantity - 1;
    }
  }

  public clearCart = () => {
    this.cart = [];
    this.deliveryMethod = null;
  };

  public reorderCart(foods: CartFood[]) {
    this.cart = foods;
  }

  public setPaymentMethod(method: PaymentMethods) {
    this.paymentMethod = method;
  }
  public setDeliveryMethod(method: DeliveryMethods) {
    this.deliveryMethod = method;
  }
}
