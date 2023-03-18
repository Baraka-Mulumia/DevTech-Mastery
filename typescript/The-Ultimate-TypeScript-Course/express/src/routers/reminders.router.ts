import CreateReminderDto from './dtos/CreateReminder';
import Reminder from './modules/Reminder';
import { Router } from 'express';
const ReminderRouter = Router();

const FakeReminders = [
  {
    id: 1,
    title: 'Reminder 1',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Reminder 2',
    isCompleted: false,
  },
];

ReminderRouter.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const newReminder = new Reminder(title);
  FakeReminders.push(newReminder);
  res.status(201).json(newReminder);
});

ReminderRouter.get('/', (_req, res) => {
  res.status(200).json(FakeReminders);
});

export default ReminderRouter;
