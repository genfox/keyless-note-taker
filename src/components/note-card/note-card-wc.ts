"use client";

import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('note-card')
export class NoteCard extends LitElement {
    static styles = css`
    :host {
        flex: 1;
        flex-grow: 1;
        min-width: 250px;
        max-width: 570px;
    }
    .article-content {
        border: 1px solid #364153;
        border-radius: .5rem;
        background-color: #1e2939;
        overflow: hidden;
    }
    .main-content {
        padding: 1.25rem;
    }
    .icon-button {
        color: #6a7282;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition-property: all;
        &.edit {
            &:hover {
                color: #fbeb2c;
            }
        }
        &.delete {
            &:hover {
                color: #fb2c36;
            }
        }
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    .title-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: .75rem;
        .note-title {
            font-size: 1.25rem;
            line-height: 1.4;
            font-weight: 700;
            color: white;
            margin: 0;
        }
    }
    .content-container {
        max-width: none;
        margin-bottom: 1rem;
        .note-content {
            color: #d1d5dc;
            white-space: pre-line;
        }
    }
    .last-update-container {
        font-size: .75rem;
        line-height: 1.33;
        color: #99a1af;
        margin-top: 1rem;
        padding-top: .75rem;
        border-top-style: solid;
        border-top-width: 1px;
        border-color: #364153;
    }
    .edit-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .text-input {
            width: 100%;
            /* padding-inline: .75rem; */
            padding-block: .5rem;
            background-color: #364153;
            border: 1px solid #4a5565;
            color: white;
            border-radius: .375rem;
            &::placeholder {
                color: #99a1af;
            }
        }
        .action-buttons {
            display: flex;
            align-items: flex-end;
            gap: 4px;
            .save-button {
                cursor: pointer;
                background-color: #364153;
                color: white;
                border-radius: .375rem;
                border: 1px solid #364153;
                padding-block: .5rem;
                &:hover {
                    background-color: #4a5565;
                }
                transition-property: all;
                position: relative;
            }
            .cancel-button {
                cursor: pointer;
                border: 1px solid #d1d5dc;
                padding-block: .5rem;
                border-radius: .375rem;
                color: #364153;
                &:hover {
                    background-color: #f9fafb;
                }
            }
        }
    }
    `;

    declare noteId: number;
    declare title: string;
    declare content: string;
    declare lastUpdate: string;
    declare onDeleteNote: (noteId: number) => void;
    declare onUpdateNote: (noteId: number, noteTitle: string, noteContent: string) => void;
    
    // declare editMode: boolean;

    static properties = {
        noteId: { type: Number },
        name: { type: String },
        content: { type: String },
        lastUpdate: { type: String },
        onDeleteNote: { type: Function },
        onUpdateNote: { type: Function }
    }

    constructor() {
        super();
        this.noteId = 0;
        this.title = '';
        this.content = '';
        this.lastUpdate = '';
        this.onDeleteNote = (noteId: number) => console.log("@@@ deleted note: ", noteId);
        this.onUpdateNote = (noteId: number, noteTitle: string, noteContent: string) => console.log("@@@ update note: ", noteId);
    }

    private handleDeleteNote() {
        if (this.onDeleteNote) {
            this.onDeleteNote(this.noteId);
        }
    }

    private handleUpdateNote(newTitle: string, newContent: string) {
        if (this.onUpdateNote) {
            this.onUpdateNote(this.noteId, newTitle, newContent);
        }
    }

    private handleEditFormSubmit(e: SubmitEvent) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        const formData = new FormData(form);

        const newTitle = formData.get('note-title') as string;
        const newContent = formData.get('note-content') as string;

        this.handleUpdateNote(newTitle, newContent);

        this.toggleEditMode();
    }

    private toggleEditMode() {
        this.editMode = !this.editMode;
        this.requestUpdate();
    }

    private editMode: boolean = false;

    render() {
        const lastUpdateDate = this.lastUpdate ? new Date(this.lastUpdate).toLocaleString() : "-";

        if (this.editMode) {
            return html`
<article class="article-content">
    <div class="main-content">
        <form class="edit-form" @submit="${this.handleEditFormSubmit}">
            <input
                type="text"
                id="note-title"
                name="note-title"
                class="text-input"
                placeholder="Note title"
                value="${this.title}"
                required
            />
            <textarea
                id="note-content"
                name="note-content"
                rows="4"
                class="text-input"
                placeholder="Write your note here..."
                required
            >${this.content}</textarea>
            <div class="action-buttons">
                <button class="save-button" type="submit">Update note</button>
                <button class="cancel-button" type="button" @click="${this.toggleEditMode}">Cancel</button>
            </div>
        </form>
    </div>
</article>
            `;
        }

        return html`
    <!-- <article className="dark:border-gray-700  bg-white dark:bg-gray-800"> -->
    <article class="article-content">
      <div class="main-content">
        <div class="title-container">
          <h2 class="note-title">${this.title}</h2>
          <!-- <h2 className=" text-gray-900 dark:text-white">${this.title}</h2> -->
           <div style="display:flex; gap:4px;">
            <button
                @click="${this.toggleEditMode}"
                class="icon-button edit"
            >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                <span class="sr-only">Edit note</span>
            </button>
            <button
                @click="${this.handleDeleteNote}"
                class="icon-button delete"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
                <span class="sr-only">Delete note</span>
          </button>
           </div>
           
        </div>

        <div class="content-container">
          <!-- <p className="text-gray-700 dark:text-gray-300">${this.content}</p> -->
          <p class="note-content">${this.content}</p>
        </div>

        <!-- <div className="text-gray-500 dark:text-gray-400  dark:border-gray-700"> -->
        <div class="last-update-container">
          Last updated: ${lastUpdateDate}
        </div>
      </div>
    </article>
`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'note-card': NoteCard;
    }
}