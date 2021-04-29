import { ICity } from './city';
import { ICategory } from './category';

export interface IDoctor {
  id: string,
  city: ICity,
  category: ICategory,
  name: string,
  experience: string,
  price: string,
  imageURL: string
}
