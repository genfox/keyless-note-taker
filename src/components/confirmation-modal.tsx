"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
}

export default function ConfirmationModal({ isOpen, onClose, onConfirm, title, description }: ConfirmationModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const modalElement = modalRef.current

    if (isOpen && modalElement && !modalElement.open) {
      modalElement.showModal()
    } else if (!isOpen && modalElement && modalElement.open) {
      modalElement.close()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  // Handle clicks outside the modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <dialog ref={modalRef} className="fixed inset-0 z-50 bg-transparent p-0" onClick={handleBackdropClick}>
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div
          className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="flex items-start justify-between">
            <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
              {title}
            </h2>
          </div>

          <p id="modal-description" className="mt-4 text-gray-600">
            {description}
          </p>

          <div className="mt-6 flex justify-end space-x-3">
            <button onClick={onClose} className="border-gray-300 py-2 px-4 border rounded-md cursor-pointer text-gray-700 hover:bg-gray-50">Cancel</button>
            <button onClick={onConfirm} className="
                cursor-pointer
                bg-gray-800 dark:bg-gray-700
                text-white
                py-2 px-4 rounded-md
                hover:bg-gray-700 dark:hover:bg-gray-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-gray-500 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-800
                transition-colors
                relative
            ">Okay</button>
          </div>
        </div>
      </div>
    </dialog>
  )
}
