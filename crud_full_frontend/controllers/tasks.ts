import { BaseAppModule, BaseAppStoreElementModule } from "@/stores/baseApp";
import { TasksStoreModule } from "@/stores/tasks";
import { ref } from "vue";

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

interface ICreateTask {
  title: string;
  description: string;
}

export class TasksController extends BaseAppModule {
  public createTaskError = ref<ICreateTask>({
    title: "",
    description: "",
  });

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

  public async validateAddTask(task: ICreateTask) {
    const title = this.validLength(task.title, 5, 100);
    const description = this.validLength(task.description, 5, 200);
    if (!title.isValid) {
      this.createTaskError.value.title = title.message || "";
    }
    if (!description.isValid) {
      this.createTaskError.value.description = description.message || "";
    }
    if (title.isValid && description.isValid) {
      this.createTaskError.value.title = "";
      this.createTaskError.value.description = "";
      await TasksStoreModule.addTask({ ...task, status: false });
      await this.getAllTasks();
      return true;
    }
  }

  public async updateTask(id: number, task: ITask): Promise<void> {
    await TasksStoreModule.updateTask(id, task);
    await this.getAllTasks();
  }

  public async deleteTask(id: number): Promise<void> {
    await TasksStoreModule.deleteTask(id);
    await this.getAllTasks();
  }
}

export const TasksControllerModule = new TasksController();
