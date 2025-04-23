import NoteCreator from "@/components/note-creator";
import NotesManager from "@/components/notes-manager";
import { Note } from "@/db/utils";

type SearchParams = Promise<{ [key: string]: string | undefined }>

function isKeyOfNote(str: string): str is keyof Note {
  const possibleKeys: (keyof Note)[] = ["id", "title", "content", "lastUpdate", "userId"];
  return possibleKeys.includes(str as keyof Note);
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const mySearchParams = await searchParams;

  let sortBy = mySearchParams.sortBy as keyof Note | undefined;
  let sortOrder = mySearchParams.sortOrder as "DESC" | "ASC" | undefined;

  if (!sortBy || !isKeyOfNote(sortBy)) {
    sortBy = "lastUpdate" as keyof Note;
  } else {
    sortBy = sortBy as keyof Note;
  }

  if (!sortOrder) {
    sortOrder = "DESC" as "DESC" | "ASC";
  } else if (sortOrder !== "ASC" && sortOrder !== "DESC") {
    sortOrder = "DESC" as "DESC" | "ASC";
  } else {
    sortOrder = sortOrder as "DESC" | "ASC";
  }

  return (
    <main className="flex-grow p-8 pb-20 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <section>
        <NoteCreator />
      </section>
      <section>
        <NotesManager sortBy={sortBy} sortOrder={sortOrder} />
      </section>
    </main>
  );
}
