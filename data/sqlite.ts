// deno-lint-ignore-file
import { DB } from "sqlite";

const database = new DB('data/database.sqlite');
export default database;
