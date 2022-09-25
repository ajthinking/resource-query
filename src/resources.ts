import { TodoResource } from "./TodoResource";
import { UserResource } from "./UserResource";

export const resources = {
  Todos: new TodoResource(),
  Users: new UserResource(),
};
