import * as React from "react";
import { FormattedMessage } from "react-intl";
import NotePreview from '../NotePreview';
import INote from "../../types/Note";

type Props = {
  notes: INote[];
};

const ListNotes: React.FC<Props> = ({ notes }) => (
  <React.Fragment>
    {!notes.length && (
      <p className="paragraph-no-data">
        <FormattedMessage id="NoItems" />
      </p>
    )}
    {!!notes.length && (
      <ul className="list-notes">
        {notes.map((note: INote) => (
          <li className="list-notes__item" key={note.id}>
            <NotePreview note={note} />
          </li>
        ))}
      </ul>
    )}
  </React.Fragment>
);

export default ListNotes;
