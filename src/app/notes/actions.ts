"use server";

import { getUser, User } from "@/authentication";
import { db } from "@/db";
import { notesTable } from "@/db/schema";
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