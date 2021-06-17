import React, { Component } from "react";
import styles from "./Header.module.scss";
import MenuItem from "./MenuItem";
import Apps from "./Apps";
import MenuProfile from "./MenuProfile";
import Communities from "./Communities";
import Notifs from "./Notifs";

const I18N = {
  en: {
    signIn: "Login / Sign up",
  },
  fr: {
    signIn: "Connexion / Inscription",
  },
  nl: {
    signIn: "Aanmelden / Inschrijven",
  },
};

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettings: false,
    };
  }

  _Search() {
    this.props.onSearchClick();
  }

  handleShowSettings = () => {
    const { showSettings } = this.state;
    this.setState({ showSettings: !showSettings });
  };

  renderLoggedIn() {
    const { rightIcons, auth, lng, notifications } = this.props;
    const { navCommunity, user } = auth;

    return (
      <>
        <div className={styles.headerRight}>
          <ul className={`${styles.menu} ${styles.buttons}`}>
            {rightIcons.home.activated && (
              <MenuItem
                icon={rightIcons.home.icon}
                href={`${rightIcons.home.url}`}
              />
            )}
            {rightIcons.profile.activated && (
              <MenuItem
                icon={rightIcons.profile.icon}
                href={`${rightIcons.profile.url}`}
              />
            )}
            {rightIcons.ebox.activated && (
              <MenuItem
                icon={rightIcons.ebox.icon}
                href={`${rightIcons.ebox.url}`}
              />
            )}
            {rightIcons.notifs.activated && (
              <Notifs
                notifications={notifications}
                lng={lng}
                rightIcon={rightIcons.notifs}
                onClick={() => this.props.handleNotificationClick()}
              />
            )}

            {navCommunity && <Apps apps={navCommunity.appsState} />}

            {rightIcons.search.activated && (
              <div onClick={this._Search.bind(this)}>
                <MenuItem icon={rightIcons.search.icon} />
              </div>
            )}
          </ul>

          <MenuProfile
            user={user}
            lng={lng}
            rightIcons={rightIcons}
            onLogoutClick={(e) => this.props.onLogoutClick(e)}
            onLanguageChange={(language) =>
              this.props.onLanguageChange(language)
            }
          />
        </div>
      </>
    );
  }

  renderLoggedOut() {
    const { lng, app } = this.props;
    const { appUrl } = app;
    const languages = ["fr", "nl", "en"];

    return (
      <div className={styles.headerRight}>
        <ul className={styles.headerLanguages}>
          {languages.map((language) => (
            <li
              key={language}
              className={lng === language ? styles.headerLanguageSelected : ""}
              onClick={() => this.props.onLanguageChange(language)}
            >
              {language.toUpperCase()}
            </li>
          ))}
        </ul>
        <a
          className={styles.signIn}
          href={`https://one.tamtam.pro/?goto=${appUrl}`}
        >
          {I18N[lng]["signIn"]}
        </a>
      </div>
    );
  }

  renderLeftSide() {
    const { app, settings, lng, auth, Link, isPrivateBlog } = this.props;
    const { appName, appLogoUrl } = app;
    return (
      <>
        <div className={styles.headerLeft}>
          <div
            className={`${styles.menuLogo} ${
              this.state.showSettings ? styles.shadow : ""
            }`}
          >
            {auth.navCommunity && auth.user && (
              <div>
                <span
                  ref={this.settingsRef}
                  className={`icon-options-vertical ${styles.settingsIcon}`}
                  style={settings.length === 0 ? { visibility: "hidden" } : {}}
                  onClick={this.handleShowSettings.bind(this)}
                />
                <ul
                  className={`${styles.menuDropdown} ${
                    this.state.showSettings ? styles.show : ""
                  }`}
                >
                  {settings.map(({ label, url }) => (
                    <li key={url}>
                      {Link ? (
                        <Link href={url}>
                          <a>{label}</a>
                        </Link>
                      ) : (
                        <a href={url}>{label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <img className={styles.appLogo} src={appLogoUrl} alt="logo" />
            {!isPrivateBlog && <div className={styles.appName}>{appName}</div>}
          </div>

          {auth.user && (
            <Communities
              communities={auth.user.communities}
              currentCommunity={auth.navCommunity}
              lng={lng}
              app={app}
              Link={Link}
              onCommunityClick={(community) =>
                this.props.onCommunityClick(community)
              }
            />
          )}
        </div>
      </>
    );
  }

  render() {
    const { auth, lng, menu } = this.props;
    return (
      <>
        <header className={styles.header}>
          {this.renderLeftSide()}
          {!auth.user ? this.renderLoggedOut() : this.renderLoggedIn()}
        </header>
      </>
    );
  }
}
