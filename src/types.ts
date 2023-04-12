export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
  subTasks: Array<Task>;
}

export type setTaskProps = Array<Task> | ((val: Array<Task>) => Array<Task>);
