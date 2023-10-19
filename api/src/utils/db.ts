const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db.sqlite");
import {open} from "sqlite";
import fs from "fs";

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
    db.run(`delete from users;`);
    db.run(`
        insert into users (email, password, is_company, company_name, company_ico) 
        values ('firma@email.cz', 'firma', true, 'Legit firma', '12134')
        `);
    db.run(`
        insert into users (email, password, is_company, individual_title_before_name, individual_name, individual_surname, individual_title_after_name) 
        values ('individual@email.cz', 'firma', false, 'Ing.', 'František', 'Zelený', '')
        `);

    db.run(`
        CREATE TABLE IF NOT EXISTS collection_type (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL UNIQUE
        );`);
    db.run(`delete from collection_type`);
    db.run(`insert into collection_type (name) values ('charita')`);
    db.run(`insert into collection_type (name) values ('socialni_zarizeni')`);
    db.run(`insert into collection_type (name) values ('priroda')`);
    db.run(`insert into collection_type (name) values ('zvirata')`);
    db.run(`insert into collection_type (name) values ('kultura')`);

    db.run(`
        CREATE TABLE IF NOT EXISTS collections (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nazev TEXT,
            ico TEXT,
            pravni_forma TEXT,
            místo_konani TEXT,
            zahajeni TEXT,
            ukonceni TEXT,
            ucel TEXT,
            cislo_bankovniho_uctu TEXT,
            nazev_vusc TEXT,
            kod_vusc TEXT,
            nazev_okresu TEXT,
            kod_okresu TEXT,
            nazev_orp TEXT,
            kod_orp TEXT,
            nazev_obce TEXT,
            kod_obce TEXT,
            nazev_ulice TEXT,
            cislo_domovni TEXT,
            typ_cisla_domovniho TEXT,
            cislo_orientacni TEXT,
            psc TEXT,
            www TEXT,
            wkt TEXT,
            x REAL,
            y REAL,
            dp_id TEXT,
            kategorie TEXT
        );`);
    db.run(`delete from collections`);

    const a = JSON.parse(fs.readFileSync("./connections_base.json", "utf8"));
    console.log(a);
  });
}

export const get_db_conn = async () =>
  await open({
    filename: "./db.sqlite",
    driver: sqlite3.Database,
  });
