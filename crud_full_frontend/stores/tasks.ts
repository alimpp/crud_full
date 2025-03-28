import { ref } from "vue";

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
}

export const TasksStoreModule = new TasksModule();
