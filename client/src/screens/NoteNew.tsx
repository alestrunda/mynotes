import * as React from "react";
import { Redirect } from "react-router-dom";
import Button from "../components/Button";
import withNotesContext from "../components/withNotesContext";
import { INoteContext } from "../context/Notes";
import { FormattedMessage, injectIntl, InjectedIntlProps } from "react-intl";

interface Props extends InjectedIntlProps {
  context: INoteContext;
}

class NoteNew extends React.Component<Props> {
  state = {
    title: "",
    description: "",
    isSubmitted: false,
    error: ""
  };

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
    const { title, description } = this.state;
    if (!title) {
      this.setState({
        error: this.props.intl.formatMessage({ id: "PleaseFillTitle" })
      });
      return;
    }
    this.props.context.onAdd(title, description);
    this.setState({
      error: "",
      isSubmitted: true
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.handleDone();
  };

  render() {
    if (this.state.isSubmitted) return <Redirect to="/" />;

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
        {this.state.error && (
          <p className="text-red text-center mb15">{this.state.error}</p>
        )}
        <div className="text-right">
          <Button data-test-id="note-done-btn" primary onClick={this.handleDone}>
            <FormattedMessage id="Done" />
          </Button>
        </div>
      </form>
    );
  }
}

export default injectIntl(withNotesContext(NoteNew));
