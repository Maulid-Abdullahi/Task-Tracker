import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  EditTask: any;

  constructor(private fb: FormBuilder, private taskservice: TaskService) {}
  ngOnInit(): void {
    this.EditTask = this.fb.group({
      text: ['', Validators.required],
      day: ['', Validators.required],
      reminder: [''],
    });
  }
}
