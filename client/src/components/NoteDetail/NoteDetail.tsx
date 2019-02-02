import * as React from "react";
import Button from "../Button";
import { NotesContext } from "../../context/Notes";
import NoteEdit from "../NoteEdit";
import { FormattedMessage } from "react-intl";
import INote from "../../types/Note";

type Props = {
  id: string;
  onDeleted: () => void;
  title?: string;
  description?: string;
};

class NoteDetail extends React.Component<Props> {
  static contextType = NotesContext;

  state = {
    isEditableMode: false
  };

  toggleEdit = () => {
    this.setState({
      isEditableMode: !this.state.isEditableMode
    });
  };

  handleEditDone = (note: INote) => {
    this.toggleEdit();
    this.context.onEdit(note);
  };

  handleDelete = () => {
    this.context.onDelete(this.props.id);
    this.props.onDeleted();
  };

  render() {
    const isEditableMode = this.state.isEditableMode;

    return (
      <React.Fragment>
        {isEditableMode && (
          <NoteEdit
            {...this.props}
            onCancel={this.toggleEdit}
            onDone={this.handleEditDone}
          />
        )}
        {!isEditableMode && (
          <React.Fragment>
            <h1>{this.props.title}</h1>
            {this.props.description && (
              <p className="text-center mb30">{this.props.description}</p>
            )}
            <div className="grid">
              <div className="grid__item grid__item--md-span-6">
                <Button data-test-id="edit" onClick={this.toggleEdit} primary>
                  <FormattedMessage id="Edit" />
                </Button>
              </div>
              <div className="grid__item grid__item--md-span-6 text-right">
                <Button data-test-id="delete" onClick={this.handleDelete} secondary>
                  <FormattedMessage id="Delete" />
                </Button>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default NoteDetail;
