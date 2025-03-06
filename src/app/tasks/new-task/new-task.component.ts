import { TasksService } from './../tasks.service';
import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<void>();
  add = output<NewTask>();
  title = signal('');
  summary = signal('');
  dueDate = signal('');
  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.title(),
        summary: this.summary(),
        dueDate: this.dueDate(),
      },
      this.userId()
    );
    this.close.emit();
  }
}
