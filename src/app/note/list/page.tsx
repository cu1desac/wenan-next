import type React from 'react';
import NoteCard from '@/app/note/list/_components/note-card';

export default function NoteList(): React.ReactNode {
  return (
    <div className="flex flex-wrap ">
      <NoteCard />
    </div>
  );
}
