import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: string[] = ['learn ionc','learn angular','read a book'];

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  deleteTask(task_name: string){
    this.tasks = this.tasks.filter(task => {
      return task !== task_name
    })
    console.log(this.tasks);
  }


}
