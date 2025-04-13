import NotesList from "./notes-list";
import { getUserNotes } from "@/db/utils";

async function NotesManager() {
    const notes = await getUserNotes();

    return (
        <div className="mt-10">
            <h3 className="mb-10">Your notes</h3>
            <div>
                <NotesList notes={notes} />
            </div>
        </div>
    );
}

export default NotesManager;