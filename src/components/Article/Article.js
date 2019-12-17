import React, { PureComponent } from "react";
//import Slider from "react-slick";
//import SocialContainer from "../Social/SocialContainer";
import Authors from "../Authors/Authors";

//import { TTP_API_URL } from "Config";
import styles from "./Article.module.scss";
import classnames from "classnames";
//import { getDateLabel } from "Utils";

const TTP_API_URL = "";

export const getDateLabel = date => {
  const d = new Date(date);

  const result = d.toDateString().split(" ");

  const hours =
    parseInt(d.getHours(), 10) < 10 ? "0" + d.getHours() : d.getHours();
  const minutes =
    parseInt(d.getMinutes(), 10) < 10 ? "0" + d.getMinutes() : d.getMinutes();

  return (
    result[2] +
    " " +
    result[1] +
    " " +
    result[3] +
    ", at " +
    hours +
    ":" +
    minutes
  );
};

export default class Article extends PureComponent {
  state = {
    playVideo: false
  };
  renderMedia() {
    let { playVideo } = this.state;

    const { main_media/*, albums */} = this.props.article;

    /*if (
      albums &&
      albums.length > 0 &&
      albums[0].medias &&
      albums[0].medias.length > 0
    ) {
      return this.renderAlbum();
    }*/

    let mediaClass = styles.media;
    let pictoDiv = null;
    let articleCoverUrl = "/img/article-cover-small.jpg";
    let isVideo = false;
    let isPDF = false;

    if (main_media) {
      if (
        main_media.preview &&
        (main_media.preview.fullMediaUrl || main_media.preview.webPath)
      ) {
        articleCoverUrl = main_media.preview.fullMediaUrl
          ? main_media.preview.fullMediaUrl
          : TTP_API_URL + "/" + main_media.preview.webPath;
        mediaClass = classnames(
          styles.media,
          styles[main_media.docType.toLowerCase()]
        );

        isVideo = main_media.docType === "VIDEO";
        isPDF = ["PDF", "PPT"].indexOf(main_media.docType) !== -1;
        pictoDiv = (
          <span>
            <img src={`/img/${main_media.docType.toLowerCase()}.png`} alt="" />
          </span>
        );
      } else {
        if (main_media.fullCroppedWebPath) {
          articleCoverUrl = main_media.fullCroppedWebPath;
        } else {
          articleCoverUrl = main_media.fullMediaUrl
            ? main_media.fullMediaUrl
            : `${TTP_API_URL}/${main_media.webPath}`;
        }
      }
    }

    let bgImg = new Image();
    bgImg.src = articleCoverUrl + "?" + new Date().getTime();

    /*bgImg.onload = function(e) {
      if (bgImg.width >= 580) {
        $(".article-file__img img").css("width", "100%");
      }
    };*/

    if (playVideo) {
      return (
        <div className={mediaClass}>
          <video
            src={
              main_media.fullMediaUrl
                ? main_media.fullMediaUrl
                : `${TTP_API_URL}/${main_media.webPath}`
            }
            controls
            autoPlay
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            onEnded={() => {
              return this.setState({ playVideo: false });
            }}
          />
        </div>
      );
    }

    if (isVideo) {
      return (
        <div className={mediaClass}>
          <div
            className={styles.mediaContent}
            style={{ backgroundImage: `url(${articleCoverUrl})` }}
          />
          {/*}<img src={articleCoverUrl} alt="" />*/}
          <span
            onClick={() => {
              return this.setState({ playVideo: true });
            }}
          >
            <img src={`/img/video.png`} alt="" />
          </span>
        </div>
      );
    }
    if (isPDF) {
      return (
        <div className={mediaClass}>
          <div
            className={styles.mediaContent}
            style={{ backgroundImage: `url(${articleCoverUrl})` }}
          />
          {/*}<img alt="" src={articleCoverUrl} />*/}
          {pictoDiv}
        </div>
      );
    }
    return (
      <div className={mediaClass}>
        <div
          className={styles.mediaContent}
          style={{ backgroundImage: `url(${articleCoverUrl})` }}
        />
        {/*}<img src={articleCoverUrl} alt="" />*/}
        {pictoDiv}
      </div>
    );
  }

  /*renderAlbum() {
    const { albums } = this.props.article;
    const medias = albums[0].medias;

    let hide = medias.length === 1 ? "hide" : "";

    const settings = {
      dots: true,
      dotsClass: "slick-dots " + hide,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true
    };

    return (
      <div className={styles.media}>
        <Slider {...settings}>
          {medias.map(media => {
            const path =
              media.preview &&
              (media.preview.fullMediaUrl || media.preview.webPath)
                ? media.preview.fullMediaUrl
                  ? media.preview.fullMediaUrl
                  : `${TTP_API_URL}/${media.preview.webPat}`
                : media.fullMediaUrl
                  ? media.fullMediaUrl
                  : `${TTP_API_URL}/${media.webPath}`;
            return (
              <div
                key={`slide-${media.id}`}
                style={{
                  background: `url(${path}) no-repeat center center`,
                  backgroundSize: "cover",
                  width: "100%",
                  height: "11.75rem"
                }}
              />
            );
          })}
        </Slider>
      </div>
    );
  }*/

  render() {
    const { community, article, openArticleReveal } = this.props;
    const {
      category,
      language,
      organization,
      title,
      introduction,
      publishedAt,
      author
    } = article;

    const nameAttr = `name${language.charAt(0).toUpperCase() +
      language.slice(1)}`;

    return (
      <div className={classnames(styles.article, "new-article")}>
        <Authors authors={author ? author : []} />
        <div className={styles.content}>
          {this.renderMedia()}
          <div className={styles.textContent}>
            <div className={styles.category}>
              <span style={{ backgroundColor: category.colorCode }}>
                {category[nameAttr]}
              </span>
            </div>
            {organization.id === community.id ? null : (
              <div
                className={styles.community}
                style={{ borderLeftColor: category.colorCode }}
              >
                {organization.abbreviation
                  ? organization.abbreviation
                  : organization.name}
              </div>
            )}
            <div
              className={classnames(
                styles.titleIntro,
                organization.id === community.id ? styles.withoutCom : ""
              )}
            >
              <h4>{title}</h4>
              <p>{introduction}</p>
            </div>
            <div className={styles.date}>{getDateLabel(publishedAt)}</div>
            {/*<SocialContainer resource={article} type="ARTICLE" />*/}
          </div>
        </div>
        {/*}<div className={styles.cover} onClick={openArticleReveal} />*/}
      </div>
    );
  }
}

// Conn
