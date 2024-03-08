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

export interface Order {
  [id: string]: number
}
