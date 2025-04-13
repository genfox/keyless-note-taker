import NoteCreator from "@/components/note-creator";
import NotesManager from "@/components/notes-manager";

export default async function Home() {
  return (
    <div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <section>
          <NoteCreator />
        </section>
        <section>
          <NotesManager />
        </section>
      </main>
    </div>
  );
}
