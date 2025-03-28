import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { TasksStoreModule } from "@/stores/tasks";

interface ITask {
  id: number;
  title: string;
  description: string;
  starus: boolean;
}

interface IResponse {
  error: string | null;
  message: string | null;
  statusCode: number;
  data: ITask[];
}

export class TasksController extends BaseAppModule {
  public async getAllTasks(): Promise<void> {
    BaseAppStoreElementModule.loading.value = true;
    try {
      const response: IResponse = await $fetch("/api/v1/task/all", {
        method: "GET",
      });

      if (response?.data) {
        await TasksStoreModule.getAllTask(response.data);
        BaseAppStoreElementModule.loading.value = false;
      }
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  }
}

export const TasksControllerModule = new TasksController();
