import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  //only for tests
  private tasks: TaskDTO[] = [];

  create(task: TaskDTO) {
    this.tasks.push(task);
    console.log(this.tasks);
  }
}
