import Reminder from '../models/reminder';
import axios from 'axios';

class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  async getReminders() {
    const response = await this.http.get<Reminder[]>('/todos');
    return response.data;
  }

  async getReminder(id: number) {
    const response = await this.http.get<Reminder>(`/todos/${id}`);
    return response.data;
  }

  async createReminder(title: string) {
    const response = await this.http.post<Reminder>('/todos', { title });
    return response.data;
  }

  async updateReminder(id: number, title: string) {
    const response = await this.http.put<Reminder>(`/todos/${id}`, { title });
    return response.data;
  }

  async deleteReminder(id: number) {
    const response = await this.http.delete<Reminder>(`/todos/${id}`);
    return response.data;
  }
}

export default new ReminderService();
