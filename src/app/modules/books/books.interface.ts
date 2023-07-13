import { Model } from 'mongoose';

//Books Interface
export type IBooks = {
  title: string;
  author: string;
  genre: string;
  status: boolean;
  publicationDate: string;
  rating?: number;
  review: string[];
};

// for statics, we use it as per documentation
export type BooksModel = Model<IBooks, object>;
