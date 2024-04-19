import pgsql from "pg"
import { DBConfig } from "./env";

const { Client } = pgsql

export const client = new Client(DBConfig);

client.connect((err: Error) => {
    if (err) {
        console.log(`\n\x1b[41mcould not connect to database:\x1b[0m`);
        console.table([err])
        console.log(`\n\n\x1b[41mConnection information:\x1b[0m`);
        console.table([DBConfig])
    }
});