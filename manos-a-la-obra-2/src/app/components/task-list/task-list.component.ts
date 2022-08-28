import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  protected tasks: Array <any>;
  private id;

  constructor() { 
    this.tasks=new Array();
    this.id=1;
    let tarea={
      id:this.id,
      task:"tarea n° " + 4,
      checked:false
    };
    let tarea2={
      id:this.id+1,
      task:"tarea n° " + 3,
      checked:false
    };
    let tarea3={
      id:this.id+2,
      task:"tarea n° " + 2,
      checked:false
    };
    let tarea4={
      id:this.id+3,
      task:"tarea n° " + 1,
      checked:false
    }
    this.tasks.push(tarea);
    this.tasks.push(tarea2);
    this.tasks.push(tarea3);
    this.tasks.push(tarea4);
  }

  ngOnInit(): void {
  }

  addTask(newTask: any):void{
    if(newTask){
      //this.id=this.id+1;
      let task: TaskObject={
         id:this.id +1,
         task:newTask,
         checked:false
      };
      this.tasks.unshift(task);
    }else{
      alert("Debe escribir una tarea para poder agregarla");
    }
    
  }
  
  delete($event:any):void{
    for( let i = 0; i < this.tasks.length; i++){ 
      if (this.tasks[i].id === $event.id) { 
        if(this.tasks[i].checked){
          this.tasks.splice(i, 1); 
        } 
        else{
          alert("La tarea debe marcarse como realizada");
        }
      } 
    }
  }

  changeChecked($event:any) : void{
    let idTask=$event.id;
    const elem=document.getElementById(idTask) as HTMLElement; 
    this.tasks.forEach(task => {
      if(task.id === $event.id){
        if(!task.checked){
            task.checked=true;
            elem.classList.add("done");
        }else{
          task.checked=false;
          elem.classList.remove("done");
        }
      } 
    });
  }
}

export interface TaskObject{
  id : number ;
  task : string ;
  checked : boolean ;
}
