"use server";

import { getUser } from "@/authentication";
import { notesTable } from "./schema";
import { db } from ".";
import { asc, desc, eq } from "drizzle-orm";

export type Note = typeof notesTable.$inferInsert;

export async function getUserNotes(sortBy: keyof Note = "lastUpdate", sortOrder: "DESC" | "ASC") : Promise<Note[]> {
    const sortFunction = sortOrder === "ASC" ? asc : desc;
    const loggedUser = getUser();
    const notes = await db.select()
        .from(notesTable)
        .where(eq(notesTable.userId, loggedUser.id))
        .orderBy(sortFunction(notesTable[sortBy]));

    return notes;
};