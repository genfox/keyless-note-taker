"use client";

import React from 'react';
import {createComponent} from '@lit/react';
import {NoteCard as NoteCardWC} from './note-card-wc';

const NoteCard = createComponent({
  react: React,
  tagName: 'note-card',
  elementClass: NoteCardWC,
  displayName: "NoteCard",
});

export default NoteCard;