import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

@Input() color: string = '';
@Input() text: string = '';
@Input() edit: string ='';
@Input() editcolor: string ='';

@Output() btnClick = new EventEmitter();
@Output() EditBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();
  }

  onEdit(){
    this.EditBtn.emit();
  }
  
  

}
