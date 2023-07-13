/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function bookCatalog() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database is Connected Successfully');

    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('Database Connection Fail', error);
  }
}
bookCatalog();
