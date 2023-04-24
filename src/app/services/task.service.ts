import { Injectable } from '@angular/core';
import { Task } from '../task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {
      id: 1,
      title: 'Acheter du lait',
      description: 'Acheter du lait pour le petit déjeuner',
      exp_date : new Date('2023-04-28'),
    },
    {
      id: 2,
      title: 'Aller chez le dentiste',
      description: 'Allez chez le dentiste pour un rendez-vous à 14h',
      exp_date : new Date('2023-05-05'),
    }
  ]

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(id_task : number){ // id_task = 1
    this.tasks = this.tasks.filter(task => {
      return task.id !== id_task
    })
  }


}
