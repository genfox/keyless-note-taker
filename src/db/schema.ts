import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  nickname: text().notNull().unique(),
});

export const notesTable = sqliteTable("notes_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: int().notNull(),
  userId: int().notNull().references(() => usersTable.id, { onDelete: "cascade" }),
});
