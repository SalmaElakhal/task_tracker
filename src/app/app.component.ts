import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy.users';
import { NewTaskComponent } from './tasks/new-task/new-task.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NewTaskComponent,
  ]
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserID: string;

// cherche le id de user qui a selected, on comparent le id qui est outputed par user, avec les id de users
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID);
  }
// output, il me donne le userIdSelected
  onSelectUser(id: string) {
    this.selectedUserID = id;
  }
}
