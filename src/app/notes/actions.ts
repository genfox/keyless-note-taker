"use server";

import { getUser, User } from "@/authentication";
import { db } from "@/db";
import { notesTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function insertNewNote(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const user = getUser();

    const note: typeof notesTable.$inferInsert = {
        title,
        content,
        userId: user.id
    };

    await db.insert(notesTable).values(note);

    revalidatePath("/");
};

export async function editNote(noteId: number, noteTitle: string, noteContent: string) {
    const now = new Date();
    const currentTimestamp = now
        .toISOString()
        .substring(0, 19)
        .replace('T', ' ');
    await db.update(notesTable)
        .set({
            title: noteTitle,
            content: noteContent,
            lastUpdate: currentTimestamp
        })
        .where(eq(notesTable.id, noteId));

    revalidatePath("/");
};

export async function deleteNote(noteId: number) {
    await db.delete(notesTable).where(eq(notesTable.id, noteId));

    revalidatePath("/");
};