import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import * as icons from "../Icons";
import styles from "../UserCard/UserCard.module.scss";
import { TTP_API_URL } from "../../config";
import { addLandaSize, getUserNameForAvatar } from "../../utils";

export class AvatarCard extends Component {
  handleAvatarClick = (e) => {
    e.stopPropagation();
    this.props.onAvatarClick();
  };

  renderAvatar() {
    const {
      avatar,
      avatarUrl,
      onSelected,
      id,
      firstName,
      lastName,
      company,
      isSelected,
      showAvatarEdit,
      onAvatarClick,
    } = this.props;

    const checkClasses = classnames(styles.check, isSelected && styles.active);
    const IconCheck = icons["Check"];
    const checkDiv = (
      <div className={checkClasses}>
        <IconCheck />
      </div>
    );

    if (avatarUrl || avatar) {
      const classes = classnames(styles.avatar, isSelected && styles.selected);
      return (
        <div
          id={`avatar-${id}`}
          className={classes}
          onClick={onSelected}
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
      isSelected && styles.selected
    );
    const avatarUserName =
      firstName || lastName
        ? getUserNameForAvatar(firstName, lastName)
        : getUserNameForAvatar(company, "");
    return (
      <div id={`avatar-${id}`} className={classes} onClick={onSelected}>
        <span>{avatarUserName}</span>
        {checkDiv}
        {showAvatarEdit && (
          <a className={styles.updateButton} onClick={this.handleAvatarClick}>
            <i className={` ${styles.icon} icon-note`}></i>
          </a>
        )}
      </div>
    );
  }

  renderHeadline() {
    const { headline } = this.props;
    if (headline) {
      return <h5>{headline}</h5>;
    } else {
      return <h5>&nbsp;</h5>;
    }
  }

  render() {
    const { theme, firstName, lastName, company } = this.props;
    const avatarInfo =
      firstName || lastName ? firstName + " " + lastName : company;
    return (
      <div className={`${styles.userCard} ${styles[theme]}`}>
        {this.renderAvatar()}
        <div className={styles.header}>
          <h3 key="h3">{avatarInfo}</h3>
          {this.renderHeadline()}
        </div>
      </div>
    );
  }
}
