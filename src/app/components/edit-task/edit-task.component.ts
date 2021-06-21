import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  EditTask: any;
  editData: any;

  constructor(private fb: FormBuilder, private taskservice: TaskService, private router: ActivatedRoute) {}
  ngOnInit(): void {
    console.log('this.router.snapshot.params',this.router.snapshot.params.id)
    this.EditTask = this.fb.group({
      text: ['', Validators.required],
      day: ['', Validators.required],
      reminder: [''],
    });

    this.taskservice.getTaskById(this.router.snapshot.params.id).subscribe((res) => {
      this.editData = res
      this.EditTask.controls['text'].setValue(this.editData.text);
      this.EditTask.controls['day'].setValue(this.editData.day);
      this.EditTask.controls['reminder'].setValue(this.editData.reminder);
    });
  
  }
  
}
