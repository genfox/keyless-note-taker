import { insertNewNote } from "@/app/notes/actions";
import { SubmitButton } from "./submit-button";

function NoteCreator() {
    return (
        <div className="max-w-md mx-auto">
            <form action={insertNewNote} className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4">
                <h3 className="group-focus-within:hidden text-lg">Create your note</h3>
                <div>
                    <label htmlFor="title" className="hidden group-focus-within:block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
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
                <div className="overflow-hidden space-y-4 h-0 opacity-0 invisible transition-all duration-300 ease-in-out group-focus-within:h-auto group-focus-within:opacity-100 group-focus-within:visible">
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
                        <SubmitButton>Save note</SubmitButton>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default NoteCreator;