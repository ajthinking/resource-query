import { resources } from "../../src/resources";
import { RestApiQueryBuilder } from "../../src/RestApiQueryBuilder";
import { TodoResource } from "../../src/TodoResource";

it("can get from an api", async () => {
  const { Todos } = resources;

  expect(Todos).toBeInstanceOf(TodoResource);
  expect(Todos.query()).toBeInstanceOf(RestApiQueryBuilder);
  const todos = await Todos.query().get();

  expect(todos).toBeInstanceOf(Array);

  console.log(todos.length);
});
