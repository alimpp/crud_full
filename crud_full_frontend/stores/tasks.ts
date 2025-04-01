import { ref } from "vue";

interface ICreateTask {
  title: string;
  description: string;
  status: boolean;
}

interface ITask {
  id: number;
  title: string;
  description: string;
  starus: boolean;
}
export class TasksModule {
  public tasks = ref<ITask[]>([]);

  public async getAllTask(tasks: ITask[]): Promise<void> {
    this.tasks.value = tasks;
  }

  public async addTask(task: ICreateTask): Promise<void> {
    await $fetch("/api/v1/task/add", {
      method: "POST",
      body: task,
    });
  }
}

export const TasksStoreModule = new TasksModule();
