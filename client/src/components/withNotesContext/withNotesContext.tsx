import * as React from "react";
import { NotesConsumer } from "../../context/Notes";

const withNotesContext = (
  Component: React.ComponentClass<any>
) => (props: {}) => (
  <NotesConsumer>
    {context => <Component context={context} {...props} />}
  </NotesConsumer>
);

export default withNotesContext;
