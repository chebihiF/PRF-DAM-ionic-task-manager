import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  tasks!: string[];

  constructor(private taskService: TaskService) { } //IOC

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.tasks = this.taskService.getTasks();
    //console.log(this.taskService.getTasks());
  }



}
