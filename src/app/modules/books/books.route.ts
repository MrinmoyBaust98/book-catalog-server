import express from 'express';
import { BooksController } from './book.controller';

const router = express.Router();

// Get a single Books
router.get('/:id', BooksController.getSingleBooks);

// Update Single Books
router.patch('/:id', BooksController.updateSingleBooks);

// Delete Books
router.delete('/:id', BooksController.deleteBooks);

// Get All Books
router.get('/', BooksController.getAllBooks);

export const BookRoutes = router;
