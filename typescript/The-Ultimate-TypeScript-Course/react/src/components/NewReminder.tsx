import React, { FunctionComponent, useState } from 'react';

type NewReminderProps = {
  onAddReminder: (title: string) => void;
};

const NewReminder: FunctionComponent<NewReminderProps> = ({
  onAddReminder,
}) => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) return;

    onAddReminder(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          className='form-control'
          id='title'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-primary my-3  rounded-pill'>
          Add Reminder
        </button>
      </div>
    </form>
  );
};

export default NewReminder;
