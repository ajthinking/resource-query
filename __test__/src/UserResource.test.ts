import { QueryCollection } from "../../src/QueryCollection";
import { resources } from "../../src/resources";
import { RestApiQueryBuilder } from "../../src/RestApiQueryBuilder";
import { TodoResource } from "../../src/TodoResource";
import { UserResource } from "../../src/UserResource";

it("can get from an file", async () => {
  const { Users } = resources;

  expect(Users).toBeInstanceOf(UserResource);
  expect(Users.query()).toBeInstanceOf(QueryCollection);
  const users = Users.query().get();

  expect(users).toBeInstanceOf(Array);

  console.log(users.length);
});
