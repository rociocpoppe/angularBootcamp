import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-invididual-task',
  templateUrl: './invididual-task.component.html',
  styleUrls: ['./invididual-task.component.css']
})
export class InvididualTaskComponent implements OnInit {
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
