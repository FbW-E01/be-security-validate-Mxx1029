import { Low, JSONFile } from 'lowdb';

const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

await db.read();

db.data = db.data || { birds: [] };

export function getData() {
    return db.data;
}

export async function writeData(data) {
    db.data = data;
    await db.write();
}