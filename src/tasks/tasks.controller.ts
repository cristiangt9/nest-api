import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dtos';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  //Index
  @Get()
  getAllTasks() {
    return this.tasksService.findAll();
  }
  //Show
  @Get(':id')
  getTaskById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.tasksService.findOneById(id);
  }
  //Store
  @Post()
  createTask(@Body() taskin: CreateTaskDto) {
    return this.tasksService.createTask(taskin);
  }
  //Update
  @Put(':id')
  updateTask(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() taskUpdate: UpdateTaskDto,
  ) {
    return this.tasksService.UpdateTask(id, taskUpdate);
  }
  //Delete
  @Delete(':id')
  getDeleteById(@Param('id', ParseUUIDPipe) id: string) {
    return this.tasksService.deleteById(id);
  }
}
