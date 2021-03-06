import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { ToastrService } from 'ngx-toastr';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

export enum ToasterPosition {
  topRight = 'toast-top-right',
  topLeft = 'toast-top-left',
  bottomRight = 'toast-bottom-right',
  bottomLeft = 'toast-bottom-left',
  // Other positions you would like
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private toastr: ToastrService, private uiService: UiService) {
      this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text || !this.day) {
      this.toastr.error('', 'please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.toastr.success('', 'Successfully added  task');

    //clear inputs after submition
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
