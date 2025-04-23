import Link from "next/link";
import NotesList from "./notes-list";
import { getUserNotes, Note } from "@/db/utils";
import SortComponent from "./sort-component";

async function NotesManager({ sortBy, sortOrder } : { sortBy: keyof Note, sortOrder: "DESC" | "ASC" }) {
    const notes = await getUserNotes(sortBy, sortOrder);

    if (notes.length === 0) {
        return (
            <div className="mt-10">
                <div className="text-center text-xl mx-auto">
                    You don't have any note yet.
                </div>
            </div>
        )
    }

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between mb-10">
                <h3 className="text-3xl">Your notes</h3>
                <SortComponent sort={{ sortBy, sortOrder }} />
            </div>
            <div>
                <NotesList notes={notes} />
            </div>
        </div>
    );
}

export default NotesManager;