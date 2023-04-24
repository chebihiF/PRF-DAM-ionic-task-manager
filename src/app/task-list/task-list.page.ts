import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  tasks!: Task[];

  constructor(private taskService: TaskService) { } //IOC

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.tasks = this.taskService.getTasks();
    //console.log(this.taskService.getTasks());
  }

  deleteTask(task_id: number){
    this.taskService.deleteTask(task_id);
    this.tasks = this.taskService.getTasks();
  }



}
