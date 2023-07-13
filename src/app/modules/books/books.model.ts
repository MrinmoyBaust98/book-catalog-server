import { Schema, model } from 'mongoose';
import { BooksModel, IBooks } from './books.interface';

//Schema Create
const booksSchema = new Schema<IBooks>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  publicationDate: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  review: [String],
});

//Model Create
export const Books = model<IBooks, BooksModel>('Books', booksSchema);
