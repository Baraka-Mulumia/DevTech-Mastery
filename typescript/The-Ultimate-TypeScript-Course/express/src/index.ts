import Express from 'express';
import ReminderRouter from './routers/reminders.router';

const app = Express();

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.use(Express.json());

app.use('/reminders', ReminderRouter);

app.listen(3000, () => {
  console.log('Server is running on port [3000]');
});
