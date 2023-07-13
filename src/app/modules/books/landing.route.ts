import express from 'express';
import { BooksController } from './book.controller';

const router = express.Router();

//get Landing page Books
router.get('/', BooksController.getLandingPageBooks);

export const LandingRoutes = router;
