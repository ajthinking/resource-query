import { Resource } from "./Resource";
import { RestApiQueryBuilder } from "./RestApiQueryBuilder";

export interface Todo {}

export class TodoResource<Todo> extends Resource<Todo> {
  query() {
    return new RestApiQueryBuilder();
  }

  factory() {}
}
