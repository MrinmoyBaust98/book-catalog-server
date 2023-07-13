import express from 'express';
import { BookRoutes } from '../modules/books/books.route';
import { LandingRoutes } from '../modules/books/landing.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/landing-page',
    route: LandingRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
