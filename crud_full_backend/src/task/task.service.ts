import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity) private taskRepo: Repository<TaskEntity>,
  ) {}
  async getAllTasks() {
    const tasks = await this.taskRepo.find();
    return {
      data: tasks,
      statusCode: 200,
      message: null,
      error: null,
    };
  }
  async getTaskById(id: number) {
    const task = await this.taskRepo.findOne({ where: { id } });
    if (!task) throw new NotFoundException();
    return {
      data: task,
      statusCode: 200,
      message: null,
      error: null,
    };
  }
  async add(body: CreateTaskDto) {
    return await this.taskRepo.save(body);
  }
  async update(id: number, body: UpdateTaskDto) {
    return await this.taskRepo.update(id, body);
  }
  async delete(id: string | number) {
    return await this.taskRepo.delete(id);
  }
}
