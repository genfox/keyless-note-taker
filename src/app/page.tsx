import NoteCreator from "@/components/note-creator";
import NotesManager from "@/components/notes-manager";

export default async function Home() {
  return (
    <main className="flex-grow p-8 pb-20 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <section>
        <NoteCreator />
      </section>
      <section>
        <NotesManager />
      </section>
    </main>
  );
}
