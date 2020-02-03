import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import * as icons from "../Icons";
import Communities from "./Communities";
import Apps from "./Apps";
import Notifs from "./Notifs";
import MenuItem from "./MenuItem";
import styles from "./Header.module.scss";

// TODO move this
export const getUserNameForAvatar = (firstName, lastName) => {
  let fName = firstName.split(" ");
  if (fName.length >= 3) {
    return extractFirstLettre(fName, 3);
  } else {
    let lName = lastName.split(" ");
    return extractFirstLettre(fName.concat(lName), 3);
  }
};

function extractFirstLettre(arrayStr, length) {
  let result = "";
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i]) {
      result += arrayStr[i].substring(0, 1);
    }
  }
  return result.toUpperCase();
}

const I18N = {
  en: {
    signIn: "Login / Sign up",
    logout: "Logout",
    profile: "Profile"
  },
  fr: {
    signIn: "Connexion / Inscription",
    logout: "Se déconnecter",
    profile: "Profil"
  },
  nl: {
    signIn: "Aanmelden / Inschrijven",
    logout: "Uitloggen",
    profile: "Profiel"
  }
};

export class Header extends Component {
  state = {
    showSettings: false
  };

  settingsRef = createRef();

  componentDidMount() {
    window.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = ({ target }) => {
    if (
      this.settingsRef &&
      this.settingsRef.current &&
      this.settingsRef.current.contains(target)
    ) {
      this.setState(({ showSettings }) => ({ showSettings: !showSettings }));
      return;
    }

    this.setState({ showSettings: false });
  };

  renderLoggedIn() {
    const {
      profileUrl,
      eboxUrl,
      homeUrl,
      apps,
      communities,
      currentCommunity,
      onCommunityChange,
      notifications,
      user,
      lng,
      onLanguageChange,
      onLogout
    } = this.props;

    const { avatarUrl, firstName, lastName, mainEmail } = user;
    const languages = ["fr", "nl", "en"];

    let avatarDiv = null;
    if (avatarUrl) {
      avatarDiv = (
        <div
          className={styles.menuImgWrap}
          style={{ backgroundImage: `url(${avatarUrl})` }}
        />
      );
    } else {
      avatarDiv = (
        <div className={`${styles.menuImgWrap} ${styles.emptyAvatar}`}>
          <span>{getUserNameForAvatar(firstName, lastName)}</span>
        </div>
      );
    }

    return (
      <>
        <nav className="top-bar-left">
          <ul className="menu">
            {/* <Communities
              communities={communities}
              currentCommunity={currentCommunity}
              onCommunityChange={onCommunityChange}
              lng={lng}
            /> */}
          </ul>
        </nav>
        <div className={styles.headerRight}>
          <ul className={`${styles.menu} ${styles.buttons}`}>
            <MenuItem icon="Profile" href={`${profileUrl}`} />
            <MenuItem
              icon="Ebox"
              className={styles.ebox}
              href={`${eboxUrl}`}
              count={102}
            />
            <Notifs
              notifications={notifications}
              lng={"fr"}
              onClick={this.handleNotificationClick}
            />
            <Apps apps={apps} />
          </ul>

          <ul className={styles.menu}>
            <li
              className={`${styles.expandable} ${styles.menuImg} ${styles.profile}`}
            >
              {avatarDiv}
              <ul className={`${styles.menuDropdown}`}>
                <li className={styles.profileContainer}>
                  {avatarDiv}
                  <div className={styles.infos}>
                    <span>{`${firstName} ${lastName}`}</span>
                    <span className={styles.email}>{mainEmail}</span>
                  </div>
                </li>
                <li className={`${styles.menuProfile}`}>
                  <ul>
                    <li>
                      <a href={`${homeUrl}profile`}> {I18N[lng]["profile"]}</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.menuLanguage}>
                  <ul>
                    {languages.map(language => (
                      <li
                        id={language}
                        key={language}
                        className={
                          lng === language ? styles.headerLanguageSelected : ""
                        }
                        onClick={() => onLanguageChange(language)}
                      >
                        {language.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className={styles.social}>
                  <ul>
                    {/* TODO add links */}
                    <li>
                      <i className="icon icon-social-facebook" />
                    </li>
                    <li>
                      <i className="icon icon-social-twitter" />
                    </li>
                    <li>
                      <i className="icon icon-social-linkedin" />
                    </li>
                  </ul>
                </li>
                <li className={styles.logout} onClick={onLogout}>
                  <Link to="/" className="text-center">
                    {I18N[lng]["logout"]}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  }

  renderLoggedOut() {
    const { lng, onLanguageChange, onClickLogin } = this.props;
    const languages = ["fr", "nl", "en"];

    return (
      <div className={styles.headerRight}>
        <ul className={styles.headerLanguages}>
          {languages.map(language => (
            <li
              key={language}
              className={lng === language ? styles.headerLanguageSelected : ""}
              onClick={() => onLanguageChange(language)}
            >
              {language.toUpperCase()}
            </li>
          ))}
        </ul>
        <a className={styles.signIn} onClick={onClickLogin} href="">
          {I18N[lng]["signIn"]}
        </a>
      </div>
    );
  }

  render() {
    const {
      loggedIn = false,
      appName,
      appLogoUrl,
      avatarUrl,
      firstName,
      lastName,
      profileUrl,
      eboxUrl,
      onClickLogo,
      settings = [],
      onLanguageChange,
      ...otherProps
    } = this.props;

    // TODO sanitize otherprops

    return (
      <header className={styles.header} {...otherProps}>
        <span
          className={`${styles.menuLogo} ${
            this.state.showSettings ? styles.shadow : ""
          }`}
        >
          <div>
            <span
              ref={this.settingsRef}
              className={`icon-options-vertical ${styles.settingsIcon}`}
              style={settings.length === 0 ? { visibility: "hidden" } : {}}
            />
            <ul
              className={`${styles.menuDropdown} ${
                this.state.showSettings ? styles.show : ""
              }`}
            >
              {settings.map(({ label, url }) => (
                <li key={url}>
                  <Link to={url}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className={styles.appInfo}>
            <img className={styles.appLogo} src={appLogoUrl} alt="logo" />
            <span className={styles.appName}>{appName}</span>
          </Link>
        </span>

        {loggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
      </header>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  appName: PropTypes.string,
  appLogoUrl: PropTypes.string,
  avatarUrl: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profileUrl: PropTypes.string,
  eboxUrl: PropTypes.string,
  lng: PropTypes.oneOf(["fr", "nl", "en"]).isRequired,
  onLanguageChange: PropTypes.func.isRequired
};
