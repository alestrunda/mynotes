import * as React from "react";
import PageContent from "./components/PageContent";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import Home from "./screens/Home";
import Note from "./screens/Note";
import NoteNew from "./screens/NoteNew";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NotesProvider } from "./context/Notes";
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import cs from "react-intl/locale-data/cs";
import "./sass/main.scss";

import localeCs from "./locale/cs.json";
import localeEn from "./locale/en.json";
type Locale = { [index: string]: string };
type LocaleMessages = { [index: string]: Locale };
const messages: LocaleMessages = {
  cs: localeCs,
  en: localeEn
};
addLocaleData([...en, ...cs]);

class App extends React.Component {
  state = {
    language: "en"
  };

  setLanguage = (language: string) => {
    this.setState({
      language
    });
  };

  render() {
    return (
      <IntlProvider
        locale={this.state.language}
        messages={messages[this.state.language]}
      >
        <NotesProvider>
          <Router>
            <div className="page-all">
              <PageHeader
                language={this.state.language}
                onLangugeChange={this.setLanguage}
              />
              <PageContent>
                <Route path="/" exact component={Home} />
                <Route path="/new-note" component={NoteNew} />
                <Route path="/notes/:id" component={Note} />
              </PageContent>
              <PageFooter />
            </div>
          </Router>
        </NotesProvider>
      </IntlProvider>
    );
  }
}

export default App;
