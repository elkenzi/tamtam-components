import React, { PureComponent } from "react";

//import { TTP_API_URL } from "Config";
import styles from "./Authors.module.scss";
import classnames from "classnames";
import { getUserNameForAvatar } from "../../utils/user";

const TTP_API_URL = "";

export default class AuthorsComponent extends PureComponent {
  renderAuthorAvatar(author) {
    const { id, firstName, lastName, avatar, avatarUrl } = author;

    return avatarUrl || avatar ? (
      <div
        key={`av-${id}`}
        className={styles.authorAvatar}
        style={{
          backgroundImage: `url(${
            avatarUrl ? avatarUrl : TTP_API_URL + "/" + avatar
          })`
        }}
      />
    ) : (
      <div className={classnames(styles.authorAvatar, "empty-avatar")}>
        <span>{getUserNameForAvatar(firstName, lastName)}</span>
      </div>
    );
  }

  render() {
    const { authors, fromViewer, fromComment } = this.props;

    if (!authors || authors.length === 0) {
      return null;
    }

    return (
      <div
        className={classnames(
          styles.authorsContainer,
          fromViewer ? styles.fromViewer : ""
        )}
      >
        <div className={styles.authors}>
          {authors.map(author => {
            if (!author || !author.enableAvatar) {
              return null;
            }
            const { id, firstName, lastName, signature } = author;

            return (
              <div
                className={classnames(
                  styles.author,
                  fromViewer ? styles.fromViewer : "",
                  fromComment ? styles.fromComment : ""
                )}
                key={`author-${id}`}
              >
                {this.renderAuthorAvatar(author)}
                <div className={styles.authorInfos}>
                  <h5>
                    {signature && signature.title
                      ? signature.title
                      : `${firstName} ${lastName}`}
                  </h5>
                  {signature && signature.head ? (
                    <span>{signature.head}</span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
