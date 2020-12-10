import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import * as icons from "../Icons";
import styles from "../UserCard/UserCard.module.scss";
import { TTP_API_URL } from "../../config";
import { addLandaSize, getUserNameForAvatar } from "../../utils";

export class AvatarCard extends Component {
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

  renderAvatar() {
    const {
      avatar,
      avatarUrl,
      onSelected,
      id,
      firstName,
      lastName,
      // isSelected,
    } = this.props;

    const checkClasses = classnames(
      styles.check,
      this.state.isSelected && styles.active
    );
    const IconCheck = icons["Check"];
    const checkDiv = (
      <div className={checkClasses}>
        {/* <i id={`check-${id}`} /> */}
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
      </div>
    );
  }

  render() {
    const { theme, firstName, lastName } = this.props;
    return (
      <div className={`${styles.userCard} ${styles[theme]}`}>
        {this.renderAvatar()}
        <div className={styles.header}>
          <h3 key="h3">{firstName + " " + lastName}</h3>
          <h5>&nbsp;</h5>
        </div>
      </div>
    );
  }
}
