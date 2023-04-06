import Express from 'express';
import { InfoLogger } from '@/utils/logger';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  InfoLogger(`Server is running on port ${PORT}`);
});
