import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { BooksService } from './books.service';

// Get Landing page Books
const getLandingPageBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BooksService.getLandingPageBooks();

  res.send({ status: true, data: result });
});

// Get All Books
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BooksService.getAllBooks();
  res.send({ status: true, data: result });
});

// get Single Books
const getSingleBooks = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BooksService.getSingleBooks(id);
  res.send({ status: true, data: result });
});

// Update Sngle Books
const updateSingleBooks = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await BooksService.updateSingleBooks(id, updatedData);

  res.send({ status: true, data: result });
});

// Delete Books
const deleteBooks = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BooksService.deleteBooks(id);

  res.send({ status: true, data: result });
});

export const BooksController = {
  getLandingPageBooks,
  getAllBooks,
  getSingleBooks,
  updateSingleBooks,
  deleteBooks,
};
