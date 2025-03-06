import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

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

  constructor(private tasksService: TasksService) {}

  selectedUserTasks = computed(() => {
    return this.tasksService.getUserTasks(this.userId());
  });

  onOpenAddTask() {
    this.isNewTask.set(true);
  }

  onCloseNewTask() {
    this.isNewTask.set(false);
  }
}
