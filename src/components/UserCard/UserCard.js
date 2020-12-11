import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import * as icons from "../Icons";
import styles from "./UserCard.module.scss";
import { TTP_API_URL } from "../../config";
import { addLandaSize, getUserNameForAvatar } from "../../utils";

const I18N = {
  en: {
    Official: "Official",
    Manager: "Manager",
    "Legal Reprentative": "Legal Reprentative",
    "Organization roles": "Organization roles",
    "Blog roles": "Blog roles",
    "Editor-in-chief": "Editor-in-chief",
    Redactor: "Redactor",
    Author: "Author",
    Mandated: "Mandated",
    "Not Mandated": "Not Mandated",
  },
  fr: {
    Official: "Officiel",
    Manager: "Directeur",
    "Legal Reprentative": "Représentant légal",
    "Organization roles": "Rôles de l'organisation",
    "Blog roles": "Rôles du blog",
    "Editor-in-chief": "Éditeur en chef",
    Redactor: "Rédacteur",
    Author: "Auteur",
    Mandated: "Mandaté",
    "Not Mandated": "Non Mandaté",
  },
  nl: {
    Official: "Officieel",
    Manager: "Manager",
    "Legal Reprentative": "Wettelijke vertegenwoordiger",
    "Organization roles": "organisatie rollen",
    "Blog roles": "blog rollen",
    "Editor-in-chief": "Hoofdredacteur",
    Redactor: "Redacteur",
    Author: "Auteur",
    Mandated: "gemandateerde",
    "Not Mandated": "niet Gemandateerde",
  },
};

export class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isSelected: !this.state.isSelected });
  }
  handleAvatarClick = (e) => {
    e.stopPropagation();
    this.props.onAvatarClick();
  };
  getHeadlineValue(headlines) {
    if (headlines.fr) {
      return headlines.fr;
    } else if (headlines.en) {
      return headlines.en;
    } else if (headlines.nl) {
      return headlines.nl;
    }

    return null;
  }
  renderAvatar() {
    const {
      avatar,
      avatarUrl,
      onSelected,
      id,
      firstName,
      lastName,
      // isSelected,
      showAvatarEdit,
      onAvatarClick,
    } = this.props;

    const checkClasses = classnames(
      styles.check,
      this.state.isSelected && styles.active
    );
    const IconCheck = icons["Check"];
    const checkDiv = (
      <div className={checkClasses}>
        <IconCheck />
      </div>
    );

    if (avatarUrl || avatar) {
      const classes = classnames(
        styles.avatar,
        this.state.isSelected && styles.selected
      );
      return (
        <div
          id={`avatar-${id}`}
          className={classes}
          onClick={this.handleClick}
          style={{
            backgroundImage: `url(${
              avatarUrl
                ? addLandaSize(avatarUrl, 260)
                : TTP_API_URL + "/" + avatar
            })`,
          }}
        >
          {checkDiv}
          {showAvatarEdit && (
            <a className={styles.updateButton} onClick={this.handleAvatarClick}>
              <i className={` ${styles.icon} icon-note`}></i>
            </a>
          )}
        </div>
      );
    }

    const classes = classnames(
      styles.avatar,
      styles.emptyAvatar,
      this.state.isSelected && styles.selected
    );
    return (
      <div id={`avatar-${id}`} className={classes} onClick={this.handleClick}>
        <span>{getUserNameForAvatar(firstName, lastName)}</span>
        {checkDiv}
        {showAvatarEdit && (
          <a className={styles.updateButton} onClick={this.handleAvatarClick}>
            <i className={` ${styles.icon} icon-note`}></i>
          </a>
        )}
      </div>
    );
  }

  renderSignature() {
    const {
      firstName,
      lastName,
      role,
      blogRoleInOrganization,
      lng,
    } = this.props;

    let headlines =
      !blogRoleInOrganization ||
      blogRoleInOrganization.length == 0 ||
      !blogRoleInOrganization[0].meta ||
      !blogRoleInOrganization[0].meta.headlines
        ? {}
        : blogRoleInOrganization[0].meta.headlines;
    let defaultSignatureDiv = [];
    defaultSignatureDiv.push(<h3 key="h3">{firstName + " " + lastName}</h3>);

    if (headlines && headlines[lng]) {
      defaultSignatureDiv.push(<h4 key="h5">{headlines[lng]}</h4>);
    } else if (headlines) {
      defaultSignatureDiv.push(
        <h4 key="h5">{this.getHeadlineValue(headlines)}</h4>
      );
    }
    if (blogRoleInOrganization && blogRoleInOrganization.length > 0) {
      const role =
        blogRoleInOrganization[0].role.charAt(0) +
        blogRoleInOrganization[0].role.substring(1).toLowerCase();
      defaultSignatureDiv.push(
        <h5 key="h4">
          <span>
            {I18N[lng][role] + " "}
            {blogRoleInOrganization[0].role !== "CHIEF_EDITOR" && (
              <span className="mandated">
                (
                {blogRoleInOrganization[0].mandated == 0
                  ? I18N[lng]["Not Mandated"]
                  : I18N[lng]["Mandated"]}
                )
              </span>
            )}
          </span>
        </h5>
      );
    } else if (role && role.id != undefined) {
      defaultSignatureDiv.push(<h5 key="h5">{I18N[lng][role.type]}</h5>);
    }
    return defaultSignatureDiv;
  }

  render() {
    const { theme } = this.props;
    return (
      <div className={`${styles.userCard} ${styles[theme]}`}>
        {this.renderAvatar()}
        <div className={styles.header}>{this.renderSignature()}</div>
      </div>
    );
  }
}
