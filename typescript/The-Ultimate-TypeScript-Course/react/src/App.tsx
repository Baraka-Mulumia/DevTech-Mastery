import { useEffect, useState } from 'react';

import NewReminder from './components/NewReminder';
import Reminder from './models/reminder';
import ReminderList from './components/ReminderList';
import reminderService from './services/reminder.service';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  const removeReminder = async (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const reminder = await reminderService.createReminder(title);
    setReminders([reminder, ...reminders]);
  };
  return (
    <div className='p-5'>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList reminders={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
