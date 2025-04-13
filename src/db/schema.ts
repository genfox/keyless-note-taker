import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  nickname: text().notNull().unique(),
});

export const notesTable = sqliteTable("notes_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: text().notNull(),
  lastUpdate: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
  userId: int().notNull().references(() => usersTable.id, { onDelete: "cascade" }),
});
