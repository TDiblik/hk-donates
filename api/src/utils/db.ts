const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db.sqlite");
import {open} from "sqlite";

export function db_init() {
  db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           email TEXT NOT NULL,
           password TEXT NOT NULL,
           is_company BOOLEAN NOT NULL,
           individual_title_before_name TEXT,
           individual_name TEXT,
           individual_surname TEXT,
           individual_title_after_name TEXT,
           company_name TEXT,
           company_ico TEXT
        );`);
  });
}

export const get_db_conn = async () =>
  await open({
    filename: "./db.sqlite",
    driver: sqlite3.Database,
  });
