import { insertNewNote } from "@/app/notes/actions";
import { SubmitButton } from "./submit-button";

function NoteCreator() {
    return (
        <div>
            {/* <h3 className="text-center mb-2">Create a new note</h3> */}
            <form action={insertNewNote} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="
                            w-full
                            px-3 py-2
                            dark:bg-gray-700
                            border border-gray-300 dark:border-gray-600
                            dark:text-white dark:placeholder-gray-400
                            rounded-md shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-gray-500 focus:border-indigo-500 dark:focus:border-gray-500
                        "
                        placeholder="Note title"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        rows={4}
                        className="
                            w-full px-3 py-2
                            dark:bg-gray-700
                            border border-gray-300 dark:border-gray-600
                            dark:text-white dark:placeholder-gray-400
                            rounded-md shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-gray-500 focus:border-indigo-500 dark:focus:border-gray-500
                        "
                        placeholder="Write your note here..."
                        required
                    ></textarea>
                </div>

                <div className="pt-2">
                    <SubmitButton>Save Note</SubmitButton>
                </div>
            </form>
        </div>
    )
}

export default NoteCreator;