import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dtos/create-task.dto';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dtos/update-task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: uuid(),
      description: 'Task1',
      done: false,
    },
    {
      id: uuid(),
      description: 'Task2',
      done: false,
    },
    {
      id: uuid(),
      description: 'Task3',
      done: false,
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findOneById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) throw new NotFoundException(`Task with id: ${id}, not found`);

    return task;
  }

  createTask(task: CreateTaskDto): Task {
    const taskIn = { ...task, id: uuid() };
    this.tasks.push(taskIn);
    return taskIn;
  }

  UpdateTask(id: string, taskUpdate: UpdateTaskDto) {
    let taskDB = this.findOneById(id);
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        taskDB = {
          ...taskDB,
          ...taskUpdate,
          id,
        };
        return taskDB;
      }
      return task;
    });
    return taskUpdate;
  }

  deleteById(id: string) {
    const task = this.findOneById(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return task;
  }
}
