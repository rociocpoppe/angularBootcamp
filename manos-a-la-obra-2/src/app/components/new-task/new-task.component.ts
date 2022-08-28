import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newTask= new EventEmitter();
  
  addTask(task: string){
    this.newTask.emit(task);
  }
}
