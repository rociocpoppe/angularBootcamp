import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-individual-task',
  templateUrl: './individual-task.component.html',
  styleUrls: ['./individual-task.component.scss']
})
export class IndividualTaskComponent implements OnInit {
  protected checked:boolean;

  constructor() {
    this.checked=false;

  }

  ngOnInit(): void {
  }

  @Input() task={
    id:0,
    task: ' ',
    checked:false,
  }
    
  @Output() deleted=new EventEmitter();

  @Output() changed=new EventEmitter();

  deleteTask(TASK:Object):void{
    this.deleted.emit(TASK);
  }

  changeChecked(TASK: Object): void{ 
    this.changed.emit(TASK);    
  }

}
