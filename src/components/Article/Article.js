import React, { useState } from "react";
import Slider from "react-slick";
import moment from "moment";

import styles from "./Article.module.scss";
import { AuthorAvatar } from "../Avatar/AuthorAvatar";
import { Fetching } from "./Fetching";
import { prepareArticle } from "../../utils";
import classnames from "classnames";

export const Article = ({
  article,
  type,
  size,
  isFetching,
  showSummary,
  showStatus,
  onPublish,
  onEdit,
  onDelete,
  saveFavorite,
  currentCommunity,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isFetching) return <Fetching type={type} size={size} />;

  const data = prepareArticle(article);
  const {
    title,
    url,
    introduction,
    communityName,
    category,
    mainMedia,
    status,
    medias,
    isExternal,
    publishedAt,
    countLikes,
    countDislikes,
    countComments,
    authors,
    social,
  } = data;
  const hasActions = onDelete || onEdit || onPublish ? true : false;
  const mediaUrl = medias && medias.length > 0 ? medias[0].path : mainMedia;

  const renderAvatar = () => {
    if (isExternal) {
      return (
        <div className={styles.isExternal}>
          <i className="icon-ttp-earth" />
        </div>
      );
    } else {
      return (
        <div className={styles.authorsContainer}>
          <ul>
            {authors.map((author) => (
              <li key={`author-${author.id}`}>
                <AuthorAvatar author={author} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  const renderTitle = () => {
    if (isExternal)
      return (
        <a href={url} target="_blank" rel="noreferrer" className={styles.title}>
          <h3>{title}</h3>
        </a>
      );
    else
      return (
        <a href={url} className={styles.title}>
          <h3>{title}</h3>
        </a>
      );
  };

  const renderSocialStats = () => {
    if (!currentCommunity) return null;
    return (
      <div className={styles.actionsContainer}>
        <div>
          <div className={styles.stat}>
            <i className="icon-ttp-thumb-up" />
            <span className={styles.actionCount}>{countLikes}</span>
          </div>
          <div className={styles.stat}>
            <i className="icon-ttp-thumb-down" />
            <span className={styles.actionCount}>{countDislikes}</span>
          </div>
          <div className={styles.stat}>
            <i className="icon-ttp-comment" />
            <span className={styles.actionCount}>{countComments}</span>
          </div>
        </div>
        <div className={styles.actions}>
          <div
            className={classnames(
              styles.action,
              social && social.isLiked === 1 ? styles.activeAction : ""
            )}
          >
            <i className="icon-ttp-thumb-up" />
          </div>
          <div
            className={classnames(
              styles.action,
              social && social.isLiked === 0 ? styles.activeAction : ""
            )}
          >
            <i className="icon-ttp-thumb-down" />
          </div>
          <div className={styles.action}>
            <i className="icon-ttp-comment" />
          </div>
          <div className={styles.action} onClick={() => setIsOpen(!isOpen)}>
            <i className="icon-ttp-share" />
            <div
              className={classnames(
                styles.sharePopup,
                isOpen ? "show" : "hide"
              )}
            >
              <a
                className={styles.action}
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon-ttp-facebook" />
              </a>
              <a
                className={styles.action}
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon-ttp-linkedin" />
              </a>

              <a
                className={styles.action}
                href={`https://twitter.com/intent/tweet?url=${url}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon-ttp-twitter" />
              </a>
            </div>
          </div>
          {saveFavorite && (
            <div
              className={classnames(
                styles.action,
                social && social.isFavorite ? styles.activeAction : ""
              )}
              onClick={() => saveFavorite()}
            >
              <i className="icon-ttp-star-o" />
            </div>
          )}
        </div>
      </div>
    );
  };
  const renderType2 = () => {
    return (
      <div className={`${styles.articleTemplate2} ${styles[size]}`}>
        <div className={styles.authorsContainer}>
          <ul>
            {authors.map((author) => (
              <li key={`author-${author.id}`}>
                <AuthorAvatar author={author} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          {publishedAt && (
            <div className={styles.publishedAt}>
              {moment(new Date(publishedAt)).format("DD MMM YYYY [at] hh:mm")}
            </div>
          )}
          <div
            className={styles.category}
            style={{ background: `${category.colorCode}` }}
          >
            {category.name}
          </div>
          <div
            className={styles.community}
            style={{ borderLeftColor: category.colorCode }}
          >
            {communityName}
          </div>

          {renderTitle()}
          <div className={styles.summary}>{introduction}</div>
          {renderSocialStats()}
        </div>
      </div>
    );
  };

  const renderType3 = () => {
    return (
      <div className={size ? styles[size] : ""}>
        <div className={styles.authorsContainer}>
          <ul>
            {authors.map((author) => (
              <li key={`author-${author.id}`}>
                <AuthorAvatar author={author} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.row}>
          <div
            className={
              hasActions && type === "type3"
                ? `${styles.col6} ${styles.contentImg} ${styles.hasActions}`
                : `${styles.col6} ${styles.contentImg}`
            }
            style={{ backgroundImage: `url(${mediaUrl})` }}
          >
            {showStatus && (
              <div
                className={`${styles.status} ${styles[status.toLowerCase()]}`}
              >
                {status}
              </div>
            )}
            {hasActions && type === "type3" && (
              <div className={styles.buttons}>
                {status !== "PUBLISHED" && onPublish && (
                  <div>
                    <button onClick={() => onPublish()}>
                      <i className="icon-ttp-paper-airplane"></i>
                    </button>
                  </div>
                )}
                {onEdit && (
                  <button>
                    <i className="icon-ttp-edit" onClick={() => onEdit()}></i>
                  </button>
                )}
                {onDelete && (
                  <button
                    className={styles["btn-delete"]}
                    onClick={() => onDelete()}
                  >
                    <i className="icon-ttp-trash"></i>
                  </button>
                )}
              </div>
            )}
          </div>
          <div className={`${styles.col6} ${styles.articleTemplate2}`}>
            <div className={styles.content}>
              {publishedAt && (
                <div className={styles.publishedAt}>
                  {moment(new Date(publishedAt)).format(
                    "DD MMM YYYY [at] hh:mm"
                  )}
                </div>
              )}
              <div
                className={styles.category}
                style={{ background: `${category.colorCode}` }}
              >
                {category.name}
              </div>
              <div
                className={styles.community}
                style={{ borderLeftColor: category.colorCode }}
              >
                {communityName}
              </div>
              {renderTitle()}
              <div className={styles.summary}>{introduction}</div>
              {renderSocialStats()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderType4 = () => {
    const settings = {
      dots: true,
      dotsClass: "slick-dots ",
      infinite: true,
      arrows: false,
      speed: 500,
      height: "100%",
      autoplay: false,
    };

    return (
      <div className={`${styles.articleTemplate4} ${styles[size]}`}>
        <div className={styles.authorsContainer}>
          <ul>
            {authors.map((author) => (
              <li key={`author-${author.id}`}>
                <AuthorAvatar author={author} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.articleContainer}>
          {publishedAt && (
            <div className={styles.publishedAt}>
              {moment(new Date(publishedAt)).format("DD MMM YYYY [at] hh:mm")}
            </div>
          )}

          {medias && medias.length > 0 ? (
            <div className={styles.contentImg}>
              <Slider {...settings}>
                {medias.map((media) => {
                  return (
                    <div key={`slide-${media.id}`}>
                      <div
                        style={{
                          background: `url(${media.path}) no-repeat center center`,
                          backgroundSize: "cover",
                          width: "100%",
                          height: "216px",
                          backgroundColor: "red",
                        }}
                      ></div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          ) : (
            <div
              className={styles.contentImg}
              style={{ backgroundImage: `url(${mediaUrl})` }}
            ></div>
          )}
          <div className={styles.content}>
            <div
              className={styles.category}
              style={{ background: `${category.colorCode}` }}
            >
              {category.name}
            </div>
            <div
              className={styles.community}
              style={{ borderLeftColor: category.colorCode }}
            >
              {communityName}
            </div>

            {renderTitle()}
            <div className={styles.summary}>{introduction}</div>
            {renderSocialStats()}
          </div>
        </div>
      </div>
    );
  };

  const renderDefault = () => {
    return (
      <div
        className={classnames(
          styles.article,
          styles.default,
          size ? styles[size] : ""
        )}
      >
        {renderAvatar()}
        <div
          className={styles.content}
          style={{ backgroundImage: `url(${mediaUrl})` }}
        >
          {publishedAt && (
            <div className={styles.publishedAt}>
              {moment(new Date(publishedAt)).format("DD MMM YYYY [at] hh:mm")}
            </div>
          )}

          <div
            className={styles.category}
            style={{ background: `${category.colorCode}` }}
          >
            {category.name}
          </div>
          <div
            className={styles.community}
            style={{ borderLeftColor: category.colorCode }}
          >
            {communityName}
          </div>

          {renderTitle()}
          {size === "large" && showSummary && (
            <div className={styles.summary}>{introduction}</div>
          )}

          {renderSocialStats()}
        </div>
      </div>
    );
  };

  switch (type) {
    case "type2":
      return renderType2();
      break;
    case "type3":
      return renderType3();
      break;
    case "type4":
      return renderType4();
      break;
    default:
      return renderDefault();
  }
};
