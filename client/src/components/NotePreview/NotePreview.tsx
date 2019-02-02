import * as React from "react";
import { Link } from "react-router-dom";
import INote from "../../types/Note";

const NotePreview: React.FC<{ note: INote }> = ({ note }) => (
  <Link to={`notes/${note.id}`} className="note-preview">
    <h2 className="mb0">{note.title}</h2>
  </Link>
);

export default NotePreview;
