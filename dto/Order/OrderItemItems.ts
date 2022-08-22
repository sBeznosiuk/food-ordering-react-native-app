export interface OrderFood {
  id: number;
  qty: number;
  attributes: {
    name: string;
    photo: string;
    price: number;
    gallery: string[];
  };
}
