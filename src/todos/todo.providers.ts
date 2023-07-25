import { TODOS_REPOSITORY } from "src/common/constants";
import { Todo } from "./todo.model";

export const todosProviders = [
  {
    provide : TODOS_REPOSITORY,
    useValue: Todo
  }
];
