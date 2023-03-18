export function generateDummyData(numItems = 10) {
  const data = [];
  const names = [
    'John',
    'Mary',
    'David',
    'Sarah',
    'Michael',
    'Emily',
    'Daniel',
    'Jessica',
    'Kevin',
    'Rachel',
  ];
  const descriptions = [
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'sed do eiusmod tempor incididunt',
    'ut labore et dolore magna aliqua',
    'Ut enim ad minim veniam',
    'quis nostrud exercitation ullamco',
    'laboris nisi ut aliquip ex ea commodo consequat',
    'Duis aute irure dolor in reprehenderit',
    'in voluptate velit esse cillum dolore',
    'eu fugiat nulla pariatur',
  ];

  for (let i = 0; i < numItems; i++) {
    const id = i + 1;
    const name = names[Math.floor(Math.random() * names.length)];
    const description =
      descriptions[Math.floor(Math.random() * descriptions.length)];
    data.push({ id, name, description });
  }

  return data;
}

// function to generate a random mongo id (5f2b3c4d5e6f7a8b9c0d1e2f)
export const uuid = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, () => {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};

//function to generate a uuidv4  id (9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d)
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
