import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";
import classnames from "classnames";

import { IconFacebook, IconTwitter, IconLinkedin } from "../Icons";
import styles from "./AuthorCard.module.scss";
import { TTP_API_URL, SOCIAL_NETWORKS_HOSTS } from "../../config";
import { addLandaSize, getUserNameForAvatar } from "../../utils";
import { Fetching } from "./Fetching";

const I18N = {
  en: {
    ARTCILES: "Articles",
  },
  fr: {
    ARTCILES: "Articles",
  },
  nl: {
    ARTCILES: "Artikelen",
  },
};

export const AuthorCard = ({
  lng = "en",
  author = null,
  isFetching = false,
}) => {
  if (isFetching) {
    return <Fetching />;
  } else {
    const { metas, contactSocialNetworks } = author;
    const { organization } = metas;
    const renderAvatar = () => {
      const { avatar, avatarUrl } = author;
      return (
        <div
          id={`avatar-${author.id}`}
          onClick={() => console.log("handle click")}
          className={styles.avatar}
          style={{
            backgroundImage: `url(${
              avatarUrl
                ? addLandaSize(avatarUrl, 260)
                : TTP_API_URL + "/" + avatar
            })`,
          }}
        ></div>
      );
    };
    const renderSocialNetwork = (name) => {
      const { contactSocialNetworks } = author;

      if (!contactSocialNetworks) {
        return null;
      }

      let socialNetwork = contactSocialNetworks[name];

      if (socialNetwork) {
        let accessValue =
          name === "twitter" ? socialNetwork.username : socialNetwork.id;
        let snUrl =
          name === "linkedin"
            ? socialNetwork.publicProfileUrl
              ? socialNetwork.publicProfileUrl
              : ""
            : `${SOCIAL_NETWORKS_HOSTS[name.toUpperCase()]}/${accessValue}`;
        let icon = null;

        switch (name) {
          case "facebook":
            icon = <IconFacebook />;
            break;
          case "twitter":
            icon = <IconTwitter />;
            break;
          case "linkedin":
            icon = <IconLinkedin />;
            break;
          default:
            icon = null;
        }

        return (
          <li>
            <a
              href={`${snUrl}`}
              target="_blank"
              rel="noreferrer"
              className="m-xs"
            >
              {icon}
            </a>
          </li>
        );
      }

      return null;
    };
    return (
      <div className={styles["author-card"]}>
        {renderAvatar()}
        <h3>
          <span>{author.firstName}</span>
          <span>{author.lastName}</span>
        </h3>
        <p>{author.headline}</p>
        {contactSocialNetworks && (
          <ul className={styles.social}>
            {renderSocialNetwork("facebook")}
            {renderSocialNetwork("twitter")}
            {renderSocialNetwork("linkedin")}
          </ul>
        )}
        <div className={styles.footer}>
          {organization ? (
            <a href={organization.url} target="_blank" rel="noreferrer">
              <img
                height={40}
                className="org-img"
                src={organization.path}
                alt={organization.name}
              />
            </a>
          ) : (
            <span></span>
          )}
          <div>{`${author.nbArticle} ${I18N[lng]["ARTCILES"]}`}</div>
        </div>
      </div>
    );
  }
};
