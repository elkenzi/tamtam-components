import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Avatar.module.scss";

export class Avatar extends Component {
  render() {
    return (
      <div className={styles.avatarContainer}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${this.props.avatarUrl})` }}
        ></div>
        {this.props.avatarName && (
          <div className={styles.avatarInfo}>
            <div className={styles.avatarName}>{this.props.avatarName}</div>
            {this.props.avatarSignature && (
              <div className={styles.avatarSignature}>
                {this.props.avatarSignature}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string,
  avatarName: PropTypes.string,
  avatarSignature: PropTypes.string
};
Avatar.defaultProps = {
  avatarUrl: null,
  avatarName: null
};
