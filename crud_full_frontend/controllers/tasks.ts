import { BaseAppModule } from "@/stores/baseApp";
import { ref } from "vue";

export class TasksController extends BaseAppModule {}

export const TasksControllerModule = new TasksController();
