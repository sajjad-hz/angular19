import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // id = input.required<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();
  user = input.required<User>();
  selected = input<boolean>(false);

  // @Output() select = new EventEmitter();  //old
  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
