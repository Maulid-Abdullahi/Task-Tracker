import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../../Task';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  tasks: Task[] = [];
  EditTask: any;
  editData: any;
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor(private fb: FormBuilder, private taskservice: TaskService, private router: ActivatedRoute, private toastr: ToastrService) {}
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

  onEditSubmit(task: Task){
    if (!this.text || !this.day) {
      this.toastr.error('', 'please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.taskservice.addTask(newTask).subscribe();
    this.toastr.success('', 'Successfully added  task');

    //clear inputs after submition
    this.text = '';
    this.day = '';
    this.reminder = false;


}
  
}
