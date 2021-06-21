import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  showEditTask: boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService, private router:Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask, this.showEditTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
 

  hasRoute(route: string){
    return this.router.url === route;
  }
}
