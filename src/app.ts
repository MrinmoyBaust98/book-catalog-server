import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import Routers from './app/routes';
import httpStatus from 'http-status';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Routes
app.use('/api/v1', Routers);

// Not Found handle
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'NOT FOUND',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API ROUTE NOT FPUND',
      },
    ],
  });
  next();
});

export default app;
