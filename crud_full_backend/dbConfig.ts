import { TaskEntity } from 'src/entities/task.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://task_owner:npg_8BXtrDkLlR2O@ep-jolly-mud-a50387k4-pooler.us-east-2.aws.neon.tech/task?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [TaskEntity],

  // ** synchronize in development mode should be true and in production mode should be false ** //
  synchronize: true,
};
