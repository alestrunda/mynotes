import * as React from "react";
import Button from "../Button";
import { FormattedMessage } from "react-intl";
import INote from "../../types/Note";

type Props = {
  id: string;
  title?: string;
  description?: string;
  onCancel: () => void;
  onDone: (args: INote) => void;
};

class NoteEdit extends React.Component<Props> {
  state = {
    title: "",
    description: ""
  };

  componentDidMount() {
    this.setState({
      title: this.props.title,
      description: this.props.description
    });
  }

  handleTitleChange = (e: { target: HTMLInputElement }) => {
    this.setState({
      title: e.target.value
    });
  };

  handleDescriptionChange = (e: { target: HTMLInputElement }) => {
    this.setState({
      description: e.target.value
    });
  };

  handleDone = () => {
    this.props.onDone({
      id: this.props.id,
      ...this.state
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.handleDone();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="input-label" htmlFor="note-title">
          <FormattedMessage id="Title" />
        </label>
        <input
          id="note-title"
          className="input-text"
          type="text"
          onChange={this.handleTitleChange}
          value={this.state.title}
        />
        <label className="input-label" htmlFor="note-description">
          <FormattedMessage id="Description" />
        </label>
        <input
          id="note-description"
          className="input-text"
          type="text"
          onChange={this.handleDescriptionChange}
          value={this.state.description}
        />
        <div className="grid">
          <div className="grid__item grid__item--md-span-6">
            <Button tertiary onClick={this.props.onCancel}>
              <FormattedMessage id="Cancel" />
            </Button>
          </div>
          <div className="grid__item grid__item--md-span-6 text-right">
            <Button primary onClick={this.handleDone}>
              <FormattedMessage id="Done" />
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default NoteEdit;
