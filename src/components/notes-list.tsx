"use client";

import { useEffect, useRef, useState } from "react";

import { Note } from "@/db/utils";
import { deleteNote, editNote } from "@/app/notes/actions";

import NoteCard from "@/components/note-card/note-card";
import ConfirmationModal from "./confirmation-modal";

function NotesList({ notes } : { notes: Note[]}) {
    const [noteToDelete, setNoteToDelete] = useState<number | null>(null);
    const currentNotesLength = useRef<number>(notes.length);

    useEffect(() => {
        if (notes.length > currentNotesLength.current) {
            if (window) {
                console.log('@@@ i should reload');
                window.location.reload();
            }
        } else {
            currentNotesLength.current = notes.length;
        }
    }, [notes]);

    const deleteNoteHandler = async (noteId: number) => {
        await deleteNote(noteId);
    };

    const updateNoteHandler = async (noteId: number, noteTitle: string, noteContent: string) => {
        await editNote(noteId, noteTitle, noteContent);
    };

    return (
        <div className="flex flex-wrap items-stretch gap-4">
            {
                notes.map(note => (
                    <NoteCard
                        key={note.id}
                        noteId={note.id}
                        title={note.title}
                        content={note.content}
                        lastUpdate={note.lastUpdate}
                        onDeleteNote={(noteId) => setNoteToDelete(noteId)}
                        onUpdateNote={(noteId, noteTitle, noteContent) => updateNoteHandler(noteId, noteTitle, noteContent)}
                    />
                ))
            }
            <ConfirmationModal
                isOpen={!!noteToDelete}
                onClose={() => setNoteToDelete(null)}
                onConfirm={() => {
                    deleteNoteHandler(noteToDelete || 0);
                    setNoteToDelete(null);
                }}
                title="Confirm Deletion"
                description="Are you sure you want to delete this note? This cannot be undone."
            />
        </div>
    )
};

export default NotesList;