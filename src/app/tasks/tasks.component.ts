import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  name = input.required<string>();
  userId = input.required<string>();
  isNewTask = signal(false);

  tasks = signal(DUMMY_TASKS);

  onCompleteTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
  }

  selectedUserTasks = computed(() => {
    return this.tasks().filter((task) => task.userId === this.userId());
  });

  onOpenAddTask() {
    this.isNewTask.set(true);
  }

  onCancelNewTask() {
    this.isNewTask.set(false);
  }

  onAddTask(taskData: NewTask) {
    const newTask = {
      id: Math.floor(Math.random() * 500).toString(),
      userId: this.userId(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };

    this.tasks.update(() => {
      return [newTask, ...this.tasks()];
    });

    this.isNewTask.set(false);
  }
}
