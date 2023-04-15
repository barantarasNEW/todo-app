import { Todo } from './Todo';

export type ContextType = {
  removeTodo: (id: number) => void;
  updateTodo: (todo: Todo) => void;
};
