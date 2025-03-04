import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'new-app';
  users = DUMMY_USERS;
  selectedId = signal('u1');

  selectedUser = computed(() => {
    return this.users.find((u) => u.id === this.selectedId())!;
  });

  onSelectUser(id: string) {
    this.selectedId.set(id);
  }
}
