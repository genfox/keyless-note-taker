"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function SortComponent({ sort }: { sort: { sortBy: string, sortOrder: string } }) {
    const [isOpen, setIsOpen] = useState(false);
    const [sortBy, setSortBy] = useState<string>(sort.sortBy || "lastUpdate");
    const [sortOrder, setSortOrder] = useState<string>(sort.sortOrder || "DESC");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 cursor-pointer rounded-md border border-gray-300 hover:bg-gray-500 transition-colors"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                >
                    <path d="m7 15 5 5 5-5" />
                    <path d="m7 9 5-5 5 5" />
                </svg>
                <span className="sr-only">Sort options</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 z-10">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">
                                Sort by
                            </label>
                            <select
                                id="sort-by"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="block text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 text-sm p-2 border"
                            >
                                <option value="lastUpdate">Last Update</option>
                                <option value="id">Creation date</option>
                                <option value="title">Title</option>
                                <option value="content">Content</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700 mb-1">
                                Order
                            </label>
                            <select
                                id="sort-order"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="block text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 text-sm p-2 border"
                            >
                                <option value="ASC">Ascending</option>
                                <option value="DESC">Descending</option>
                            </select>
                        </div>

                        <div className="flex justify-between mt-2">
                            <Link
                                href="/"
                                className="border-gray-300 py-2 px-4 border rounded-md cursor-pointer text-gray-700 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Reset
                            </Link>
                            <Link
                                href={`/?sortBy=${sortBy}&sortOrder=${sortOrder}`}
                                className="
                                cursor-pointer
                                bg-gray-800 dark:bg-gray-700
                                text-white
                                py-2 px-4 rounded-md
                                hover:bg-gray-700 dark:hover:bg-gray-600
                                focus:outline-none focus:ring-2 focus:ring-offset-2
                                focus:ring-gray-500 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-800
                                transition-colors
                                relative
                            "
                                onClick={() => setIsOpen(false)}
                            >
                                Apply
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
