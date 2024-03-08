export interface DishForm {
  title: string;
  price: number | null;
  image: string;
}

export interface ApiDish {
  title: string;
  price: number;
  image: string;
}

export interface Dish extends ApiDish {
  id: string;
}

export interface ApiDishes {
  [id: string]: ApiDish;
}

export interface OrderMinified {
  [id: string]: number;
}

export interface ApiOrder {
  [id: string]: OrderMinified;
}

export interface OrderDish extends ApiDish {
  count: number;
}

export interface Order {
  id: string;
  items: OrderDish[];
}