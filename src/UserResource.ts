import { QueryCollection } from "./QueryCollection";
import { Resource } from "./Resource";

export interface Todo {}

export class UserResource<Todo> extends Resource<Todo> {
  query() {
    return new QueryCollection(require("./users.json"));
  }

  factory() {}
}
