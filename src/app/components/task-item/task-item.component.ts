import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faEdit = faEdit;
  tasks: Task[] = [];
  
  constructor(private router: Router, private taskService: TaskService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }
  editTask(task: any) {
    this.router.navigate([`/edit/${task.id}`]);
  }
}
