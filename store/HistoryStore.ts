import {makeAutoObservable} from 'mobx';

import {Order as OrderDto} from '../dto/Order/Order';
import {OrderItem as OrderDtoItem} from '../dto/Order/OrderItem';
import {OrderFood} from '../dto/Order/OrderItemItems';
import {CartFood} from '../models/CartFood';
import {Order} from '../models/Order';
import {httpApi} from './api';
import {RootStore} from './RootStore';

export class HistoryStore {
  public foods: Order[] = [];
  public rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {rootStore: false});
  }

  public createFoodOrder = async (
    foods: CartFood[],
    deliveryMethod: string | null,
    payment: string,
  ) => {
    const data = {
      address: this.rootStore.userStore.user?.email,
      phone: this.rootStore.userStore.user?.email,
      delivery_method: deliveryMethod,
      payment,
      users_permissions_user:
        this.rootStore.userStore.user?.id,
      items: foods.map(mapToOrderItem),
    };

    try {
      await httpApi.post(
        '/orders',
        {
          data,
        },
        {params: {populate: '*'}},
      );

      this.fetchOrderHistory();
      this.rootStore.cartStore.clearCart();
    } catch (e) {
      throw new Error(`error: ${e}`);
    }
  };

  public fetchOrderHistory = async () => {
    try {
      const {data} = await httpApi.get<OrderDto>(
        '/orders',
        {
          params: {
            populate: '*',
            'filters[users_permissions_user][id][$eq]':
              this.rootStore.userStore.user?.id,
          },
        },
      );

      const orders = data.data.map(mapToOrder);

      this.foods = orders;
    } catch (error) {
      throw new Error(`error: ${error}`);
    }
  };
}

const mapToOrderItem = (item: CartFood) => ({
  id: item.id,
  qty: item.quantity,
  attributes: {
    name: item.name,
    photo: item.photo,
    price: item.price,
    gallery: item.gallery,
  },
});

const mapOrderItem = (item: OrderFood) => ({
  id: item.id,
  quantity: item.qty,
  name: item.attributes.name,
  photo: item.attributes.photo,
  price: item.attributes.price,
  gallery: item.attributes.gallery,
});

const mapToOrder = (order: OrderDtoItem) =>
  new Order(
    order.id,
    order.attributes.address,
    Date.parse(order.attributes.createdAt),
    order.attributes.deliveryMethod,
    order.attributes.items.map(mapOrderItem),
    order.attributes.payment,
    order.attributes.phone,
    Date.parse(order.attributes.publishedAt),
    Date.parse(order.attributes.updatedAt),
    order.attributes.items[0].attributes.photo,
  );
