"use server";

import { getUser } from "@/authentication";
import { notesTable } from "./schema";
import { db } from ".";
import { desc, eq } from "drizzle-orm";

export type Note = typeof notesTable.$inferInsert;

export async function getUserNotes() : Promise<Note[]> {
    const loggedUser = getUser();
    const notes = await db.select()
        .from(notesTable)
        .where(eq(notesTable.userId, loggedUser.id))
        .orderBy(desc(notesTable.lastUpdate));

    return notes;
};