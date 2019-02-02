import * as React from "react";
import ListNotes from "../components/ListNotes";
import { NotesContext } from "../context/Notes";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

class Home extends React.Component {
  static contextType = NotesContext;

  render() {
    return (
      <React.Fragment>
        <h1>
          <FormattedMessage id="MyNotes" />
        </h1>
        {this.context.errorMessageID && (
          <p className="text-error">
            <FormattedMessage id={this.context.errorMessageID} />
          </p>
        )}
        {!this.context.errorMessageID && (
          <ListNotes notes={this.context.notes} />
        )}
        <div className="text-center mt40">
          <Link data-test-id="new-note-btn" to="new-note">
            <Button primary>
              <FormattedMessage id="NewNote" />
            </Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
