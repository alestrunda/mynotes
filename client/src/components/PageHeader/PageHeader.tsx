import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { FormattedMessage } from "react-intl";

type Props = {
  language: string;
  onLangugeChange: (lang: string) => void;
};

const PageHeader: React.FC<Props> = ({ language, onLangugeChange }) => {
  const getOtherLanguage = (lang: string) => {
    return lang === "en" ? "cs" : "en";
  };

  const handleLanguageChange = () => {
    onLangugeChange(getOtherLanguage(language));
  };

  return (
    <div className="page-header">
      <div className="container">
        <nav className="navigation-wrapper">
          <ul className="navigation">
            <li>
              <Link className="navigation__link" to="/">
                <FormattedMessage id="Home" />
              </Link>
            </li>
            <li>
              <Link className="navigation__link" to="/new-note">
                <FormattedMessage id="NewNote" />
              </Link>
            </li>
          </ul>
          <Button
            className="button--compact ml10 mb0"
            primary
            onClick={handleLanguageChange}
          >
            {getOtherLanguage(language).toUpperCase()}
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
