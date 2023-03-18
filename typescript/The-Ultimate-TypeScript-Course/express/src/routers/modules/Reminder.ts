export default class Reminder {
  id: number;
  isCompleted: boolean;

  constructor(public title: string) {
    this.title = title;
    this.id = Math.floor(Math.random() * Date.now());
    this.isCompleted = false;
  }
}
