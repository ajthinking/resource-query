import axios from "axios";
import { QueryBuilder } from "./QueryBuilder";

export class RestApiQueryBuilder extends QueryBuilder {
  root = "https://jsonplaceholder.typicode.com";
  entity = "todos";

  async get() {
    const response = await axios.get(`${this.root}/${this.entity}`);

    return response.data;
  }
}
