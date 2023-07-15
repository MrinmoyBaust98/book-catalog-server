import { IBooks } from './books.interface';
import { Books } from './books.model';

//getLanding page Books
const getLandingPageBooks = async (): Promise<IBooks[]> => {
  const result = await Books.find().limit(10);
  return result;
};

// Get All Books
const getAllBooks = async (): Promise<IBooks[]> => {
  const result = await Books.find();
  return result;
};

// Get Single Books
const getSingleBooks = async (id: string): Promise<IBooks | null> => {
  const result = await Books.findById(id);
  return result;
};

//post comment
const postComment = async (id: string, payload: string) => {
  // after cheeking start update here
  const result = await Books.findOneAndUpdate(
    { _id: id },
    { $push: { review: payload } }
  );

  return result;
};

// get comment
const getComment = async (id: string) => {
  const result = await Books.findById(id);
  return result;
};

// update Single Books
const updateSingleBooks = async (
  id: string,
  payload: Partial<IBooks>
): Promise<IBooks | null> => {
  // after cheeking start update here
  const result = await Books.findOneAndUpdate(
    { _id: id },
    payload,

    {
      new: true,
    }
  );
  return result;
};

// Delete Books
const deleteBooks = async (id: string): Promise<IBooks | null> => {
  const result = await Books.findOneAndDelete({ _id: id });
  return result;
};

export const BooksService = {
  getLandingPageBooks,
  getAllBooks,
  getSingleBooks,
  postComment,
  getComment,
  updateSingleBooks,
  deleteBooks,
};
