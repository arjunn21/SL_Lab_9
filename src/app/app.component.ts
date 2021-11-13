import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public todoservice: TodoService){}
  title = 'Lab9';
  addData(){
    let el = document.getElementById("input");
    el.style.display = "block";
    el = document.getElementById("button");
    el.style.display = "block";
  }
  submit(e){
    let id = this.todoservice.taskList.length + 1;
    let element = {"id": id, "detail": e}
    this.todoservice.taskList.push(element);
    let el = document.getElementById("input");
    el.style.display = "none";
    el = document.getElementById("button");
    el.style.display = "none";
    return false;
  }
}
