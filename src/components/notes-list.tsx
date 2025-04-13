"use client";

import { Note } from "@/db/utils";
import NoteCard from "./note-card";

function NotesList({ notes } : { notes: Note[]}) {
    console.log("@@@ notes: ", notes);
    return (
        <div className="flex gap-4">
            {
                notes.map(note => (
                    // <div key={note.id} className="flex flex-col gap-2 border-2 rounded-sm bg-slate-400">
                    //     <div className="text-lg">{note.title}</div>
                    //     <div>{note.content}</div>
                    // </div>
                    <NoteCard
                        key={note.id}
                        id={note.id ?? 0}
                        title={note.title}
                        content={note.content}
                        lastUpdate={note.lastUpdate ?? new Date()}
                        onDelete={(noteId) => alert(`Deleted note: ${noteId}`)}
                    />
                ))
            }
        </div>
    )
};

export default NotesList;