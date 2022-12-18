import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from './routes/client.js';
import genetalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

import User from './models/User.js';
import { dataUser } from './data/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/client', clientRoutes);
app.use('/general', genetalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
      // User.insertMany(dataUser);
    }),
  )
  .catch((error) => console.log(`${error} did not connect`));
