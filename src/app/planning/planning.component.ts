import { Component, OnInit } from '@angular/core';
  import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  taskList: any[] = []
  
  completed: boolean = false;
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  })
  constructor(private formBuilder: FormBuilder) { }
  addTask = () =>{
    const value = this.newTodoForm.value.todoItem
    this.taskList.push({ id: this.taskList.length, name: value })
    window.localStorage.setItem('task', JSON.stringify(this.taskList))
    this.newTodoForm.reset(); 
  
  }
  markDone(value: any) {
      value.completed = !value.completed
      value.completed === true ?
        this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
        this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])
    }
    removeTask(i: any) {
      this.taskList.splice(i, 1)
      window.localStorage.setItem('task', JSON.stringify(this.taskList))
    }
    ngOnInit(): void { 
      
  }
  
  
}



