import React, { Component } from "react";
import PropTypes from 'prop-types';

import * as icons from '../Icons';
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

export class Header extends Component {

    renderLoggedIn() {
        const {
            avatarUrl,
            firstName,
            lastName,
            profileUrl,
            eboxUrl,
        } = this.props;

        return (
            <>
            <div style={{ display: "flex", marginLeft: "auto" }}>
                <div className={styles.menuLink}>
                    <a href={profileUrl}>
                        <icons.Profile />
                    </a>
                </div>
                <div className={styles.menuLink}>
                    <a href={eboxUrl}>
                        <icons.Ebox />
                    </a>
                </div>
                <div className={`${ styles.menuLink } ${ styles.expandable }`}>
                    <span>
                        <icons.Notifs />
                    </span>
                </div>
                <div className={`${ styles.dropdown } ${ styles.notifsDropdown }`}>
                    <div className="flex-container social-links__header">
                        <div className="flex-container flex-dir-column infos">
                        <span>{firstName + " " + lastName}</span>
                        </div>
                    </div>
                </div>  
                <div className={`${ styles.menuLink } ${ styles.expandable }`}>
                    <span>
                        <icons.Apps />
                    </span>
                </div>
                <div className={`${ styles.dropdown } ${ styles.appsDropdown }`}>
                    <div className="flex-container social-links__header">
                        <div className="flex-container flex-dir-column infos">
                        <span>{firstName + " " + lastName}</span>
                        </div>
                    </div>
                </div>                  
            </div>
            
            <div 
                className={`${ styles.profile } ${ styles.expandable }`} 
                style={ avatarUrl ? { backgroundImage: `url(${avatarUrl})`} : {}}>

                { avatarUrl ? "" : getUserNameForAvatar(firstName, lastName) }

            </div>

            <div className={`${ styles.dropdown } ${ styles.profileDropdown }`} >
                <div className="flex-container social-links__header">
                    <div className="flex-container flex-dir-column infos">
                    <span>{firstName + " " + lastName}</span>
                    </div>
                </div>
            </div>  
            </> 
        );
    }

    renderLoggedOut() {
        const { language, onLanguageChange } = this.props;
        const languages = ["fr", "nl", "en"];

        // const tmp = `${TTP_HOME_URL}?goto=${goto}`;

        return (
            <div className="top-bar-right menu__off">
              <div className="menu__language">
                <ul>
                    {languages.map(lng => (
                        <li
                            id={lng} 
                            key={lng}
                            className={lng === language ? "selected" : ""}
                            onClick={() => onLanguageChange(lng)}
                        >
                            {lng.toUpperCase()}
                        </li>
                    ))}
                </ul>
              </div>
              <a className="sign-in" href={''}>
                <i className="icon icon-lock" />
                {"Sign in / Join"}
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
            ...otherProps
        } = this.props;

        return (
            <header className={styles.header} {...otherProps}>
                <div className={styles.appInfo}>
                    <img
                        className={styles.appLogo}
                        src={appLogoUrl}
                        alt="logo"
                    />
                    <span className={styles.appName}>
                        {appName}
                    </span>
                </div>
    
                { loggedIn ? this.renderLoggedIn() : this.renderLoggedOut() }        
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
    language: PropTypes.oneOf(['fr', 'nl', 'en']).isRequired,
    onLanguageChange: PropTypes.func.isRequired
};