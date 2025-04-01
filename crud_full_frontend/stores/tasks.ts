import { ref } from "vue";

interface ICreateTask {
  title: string;
  description: string;
  status: boolean;
}

interface ITask {
  title: string;
  description: string;
  starus: boolean;
}

interface ISingleTask {
  title: string;
  description: string;
  starus: boolean;
  id: number;
}

export class TasksModule {
  public tasks = ref<ITask[]>([]);
  public task = ref<ISingleTask>({
    title: "",
    description: "",
    starus: false,
    id: 0,
  });

  public async getAllTask(tasks: ITask[]): Promise<void> {
    this.tasks.value = tasks;
  }

  public async getTask(task: ISingleTask): Promise<void> {
    this.task.value = task;
  }

  public async addTask(task: ICreateTask): Promise<void> {
    await $fetch("/api/v1/task/add", {
      method: "POST",
      body: task,
    });
  }

  public async updateTask(id: number, task: ITask): Promise<void> {
    await $fetch(`/api/v1/task/${id}`, {
      method: "PATCH",
      body: task,
    });
  }

  public async deleteTask(id: number): Promise<void> {
    await $fetch(`/api/v1/task/${id}`, {
      method: "DELETE",
    });
  }
}

export const TasksStoreModule = new TasksModule();
