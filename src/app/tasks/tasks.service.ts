import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { type NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = signal(DUMMY_TASKS);

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    const newTask = {
      id: Math.floor(Math.random() * 500).toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };

    this.tasks.update(() => {
      return [newTask, ...this.tasks()];
    });
  }

  removeTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
  }
}
