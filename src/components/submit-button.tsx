"use client"

import type React from "react"

import { useFormStatus } from "react-dom"

interface SubmitButtonProps {
  children: React.ReactNode
  className?: string
}

export function SubmitButton({ children, className = "" }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={`
        cursor-pointer
        w-full
        bg-gray-800 dark:bg-gray-700
        text-white
        py-2 px-4 rounded-md
        hover:bg-gray-700 dark:hover:bg-gray-600
        focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-gray-500 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-800
        transition-colors
        relative
        disabled:opacity-70 
        disabled:cursor-not-allowed
        disabled:hover:bg-gray-800 dark:disabled:hover:bg-gray-700
        ${className}
      `}
    >
      {pending ? (
        <>
          <span className="opacity-0">{children}</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
              aria-hidden="true"
            ></div>
          </div>
        </>
      ) : (
        children
      )}
    </button>
  )
}
