import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  isOpen = output<void>();
  add = output<NewTask>();
  title = signal('');
  summary = signal('');
  dueDate = signal('');

  onCancel() {
    this.isOpen.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    });
  }
}
