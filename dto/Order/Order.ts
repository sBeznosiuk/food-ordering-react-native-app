import {OrderItem} from './OrderItem';
import {OrderMeta} from './OrderMeta';

export interface Order extends OrderMeta {
  data: OrderItem[];
}
