import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get('/all')
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number) {
    return await this.taskService.getTaskById(id);
  }

  @Post('add')
  async add(@Body() body: CreateTaskDto) {
    return await this.taskService.add(body);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateTaskDto) {
    return await this.taskService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string | number) {
    return await this.taskService.delete(id);
  }
}
