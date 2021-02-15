import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import moment from "moment";

import Skeleton from "react-loading-skeleton";
import styles from "./Article.module.scss";
import { Avatar } from "../Avatar/Avatar";
import { AuthorAvatar } from "../Avatar/AuthorAvatar";
import { Fetching } from "./Fetching";
import { prepareArticle, addLandaSize } from "../../utils";

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
}) => {
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
              <li>
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
    return (
      <div className={styles.actionsContainer}>
        <div className={styles.action}>
          <i className="icon-ttp-thumb-up" />
          <span className={styles.actionCount}>{countLikes}</span>
        </div>
        <div className={styles.action}>
          <i className="icon-ttp-thumb-down" />
          <span className={styles.actionCount}>{countDislikes}</span>
        </div>
        <div className={styles.action}>
          <i className="icon-ttp-comment" />
          <span className={styles.actionCount}>{countComments}</span>
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
              <li>
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
      <div className={`${styles.articleTemplate3} ${styles[size]}`}>
        <div className={styles.authorsContainer}>
          <ul>
            {authors.map((author) => (
              <li>
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
              <div class={`${styles.status} ${styles[status.toLowerCase()]}`}>
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
              <li>
                <AuthorAvatar author={author} />
              </li>
            ))}
          </ul>
        </div>
        <div class={styles.articleContainer}>
          {publishedAt && (
            <div className={styles.publishedAt}>
              {moment(new Date(publishedAt)).format("DD MMM YYYY [at] hh:mm")}
            </div>
          )}

          {medias && medias.length > 0 ? (
            <div class={styles.contentImg}>
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
              class={styles.contentImg}
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
      <div className={`${styles.article} ${styles[size]}`}>
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

  if (isFetching) {
    return <Fetching type={type} size={size} />;
  } else {
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
  }
};

// Article.propTypes = {
//   type: PropTypes.oneOf(["default", "type2", "type3", "type4"]),
//   size: PropTypes.oneOf(["small", "smallBH", "medium", "large"]),
//   publishedAt: PropTypes.string,
//   category: PropTypes.string,
//   community: PropTypes.string,
//   title: PropTypes.string,
//   summary: PropTypes.string,
//   showSummary: PropTypes.bool,
//   url: PropTypes.string,
//   avatarUrl: PropTypes.string,
//   authorName: PropTypes.string,
//   authorSignature: PropTypes.string,
//   likeCount: PropTypes.number,
//   disLikeCount: PropTypes.number,
//   commentCount: PropTypes.number,
//   shareCount: PropTypes.number,
//   favoriteCount: PropTypes.number,
// };
// Article.defaultProps = {
//   type: "default",
//   size: "small",
//   showSummary: false,
//   likeCount: 0,
//   disLikeCount: 0,
//   commentCount: 0,
//   shareCount: 0,
//   favoriteCount: 0,
// };
