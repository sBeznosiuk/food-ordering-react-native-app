import {OrderFood} from './OrderItemItems';

export interface OrderItem {
  id: number;
  attributes: {
    address: string;
    phone: string;
    items: OrderFood[];
    deliveryMethod: string;
    payment: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    users_permissions_user: {
      data: {
        id: number;
        attributes: {
          username: string;
          email: string;
          provider: string;
          confirmed: boolean;
          blocked: boolean;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
}
