import * as React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const PageContent: React.FC<Props> = ({ children }) => (
  <main className="page-content">
    <div className="container">{children}</div>
  </main>
);

export default PageContent;
