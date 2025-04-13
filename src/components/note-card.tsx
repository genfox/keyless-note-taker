"use client"

interface NoteProps {
  id: number
  title: string
  content: string
  lastUpdate: string | Date
  onUpdate?: (id: number) => void
  onDelete?: (id: number) => void
}

export default function NoteCard({ id, title, content, lastUpdate, onUpdate, onDelete }: NoteProps) {
  // Format the date if it's a Date object
  const formattedDate = lastUpdate instanceof Date ? lastUpdate.toLocaleString() : lastUpdate

  return (
    <article className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white dark:bg-gray-800">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {onUpdate && (
                <button
                  onClick={() => onUpdate(id)}
                  className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Edit note"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(id)}
                  className="p-1 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Delete note"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert prose-sm max-w-none mb-4">
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{content}</p>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400 mt-4 pt-3 border-t dark:border-gray-700">
          Last updated: {formattedDate}
        </div>
      </div>
    </article>
  )
}
