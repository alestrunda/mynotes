import * as React from "react";
import uuid from "uuid/v4";
import axios from "axios";
import { API_URL } from "../settings";
import INote from "../types/Note";

const Context = React.createContext({});

type State = {
  errorMessageID: string;
  notes: INote[];
};

class ContextProvider extends React.Component<{}, State> {
  state = {
    errorMessageID: "",
    notes: []
  };

  componentDidMount() {
    this.loadNotes();
  }

  async loadNotes() {
    try {
      const response = await axios.get(`${API_URL}/notes`);
      this.setState({
        notes: response.data
      });
    } catch (e) {
      //perhaps save the error in database
      this.setState({
        //cannot use react-intl here, because the context stays, notes are loaded only once, so when language changes the message will not update,
        //better to keep just the message id and let the components that actually displays the error worry about the translation
        errorMessageID: "CannotLoadNotes"
      });
    }
  }

  hideError() {
    this.setState({
      errorMessageID: ""
    });
  }

  addNote = (title: string, description: string) => {
    this.hideError(); //hide error if there is any from previous action
    const newNote = {
      id: uuid(),
      title,
      description
    };
    this.setState({
      notes: [...this.state.notes, newNote]
    });
    axios.post(`${API_URL}/notes`, newNote).catch(e => {
      //log show some error
    });
  };

  deleteNote = (noteID: string) => {
    this.setState({
      notes: this.state.notes.filter((note: INote) => note.id !== noteID)
    });
    axios.delete(`${API_URL}/notes/${noteID}`).catch(e => {
      //log show some error
    });
  };

  editNote = (editedNote: INote) => {
    const targetNoteIndex = this.state.notes.findIndex(
      (note: INote) => note.id === editedNote.id
    );
    this.setState({
      notes: [
        ...this.state.notes.slice(0, targetNoteIndex),
        editedNote,
        ...this.state.notes.slice(targetNoteIndex + 1)
      ]
    });
    axios.put(`${API_URL}/notes/${editedNote.id}`, editedNote).catch(e => {
      //log show some error
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          errorMessageID: this.state.errorMessageID,
          notes: this.state.notes,
          onAdd: this.addNote,
          onDelete: this.deleteNote,
          onEdit: this.editNote
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export interface INoteContext {
  errorMessageID: string,
  notes: INote[],
  onAdd: (title: string, description: string) => void,
  onDelete: (noteID: string) => void,
  onEdit: (note: INote) => void
}

export const NotesContext = Context;
export const NotesProvider = ContextProvider;
export const NotesConsumer = Context.Consumer;
