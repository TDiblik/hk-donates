const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db.sqlite");

export function db_init() {
  db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           email TEXT NOT NULL,
           password TEXT NOT NULL,
           type INTEGER NOT NULL,
           idividual_title_before_name TEXT,
           idividual_name TEXT,
           idividual_surname TEXT,
           idividual_title_after_name TEXT,
           company_name TEXT,
           company_ico TEXT
        );`);
  });
}

export default db;
