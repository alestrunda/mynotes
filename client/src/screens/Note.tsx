import React from "react";
import NoteDetail from "../components/NoteDetail";
import { NotesConsumer } from "../context/Notes";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { History } from "history";
import INote from "../types/Note";

interface Props extends RouteComponentProps {
  match: any;
  history: History;
}

const Note: React.FC<Props> = props => {
  const handleDeleted = () => {
    //current lesson does not exist anymore, redirect to the homepage
    props.history.push("/");
  };

  return (
    <NotesConsumer>
      {(context: any) => {
        const note = context.notes.find(
          (note: INote) => note.id === props.match.params.id
        );
        if (!note)
          return (
            <p className="text-error">
              <FormattedMessage id="NotFound" />
            </p>
          );
        return <NoteDetail onDeleted={handleDeleted} {...note} />;
      }}
    </NotesConsumer>
  );
};

export default withRouter(Note);
