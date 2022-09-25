import { Collection } from "collect.js";
import { QueryCollection } from "./QueryCollection";
import { resources } from "./resources";

const { Users } = resources;

Users.query().all();

const regular = new Collection([1, 2, 3]);
const specialExtended = new QueryCollection([1, 2, 3]);

regular.all();// typehints available
(new QueryCollection([1,2,3,])).
