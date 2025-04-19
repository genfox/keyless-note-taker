import NotesList from "./notes-list";
import { getUserNotes } from "@/db/utils";

async function NotesManager() {
    const notes = await getUserNotes();

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
            <h3 className="mb-10 text-3xl">Your notes</h3>
            <div>
                <NotesList notes={notes} />
            </div>
        </div>
    );
}

export default NotesManager;