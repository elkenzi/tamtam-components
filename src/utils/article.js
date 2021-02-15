const TTP_FFF_BLOG = "https://blog.be.accountants/";
const TTP_BE_ACCOUNTANTS_BLOG = "https://blog.forumforthefuture.be/";
const TTP_DAP_BLOG = "https://blog.degandpartners.com/";
const TTP_API_URL = "http://api.tamtam.pro";

const getArticleFullUrl = (article, navCommunityId = 0) => {
  const { url, id, organization, language, isExternal, externalUrl } = article;
  if (isExternal) {
    return externalUrl;
  }

  let fullUrl = `/${language}/article/${url}/${id}`;

  if (
    organization &&
    [8, 9, 4].includes(organization.id) &&
    organization.id !== navCommunityId
  ) {
    if (organization.id === 9) {
      return `${TTP_FFF_BLOG}${fullUrl.substring(1)}`;
    } else if (organization.id === 8) {
      return `${TTP_BE_ACCOUNTANTS_BLOG}${fullUrl.substring(1)}`;
    } else if (organization.id === 4) {
      return `${TTP_DAP_BLOG}${fullUrl.substring(1)}`;
    }
  }

  return fullUrl;
};

export const getCategoryName = (category, lng) => {
  const nameAttr = `name${lng.charAt(0).toUpperCase() + lng.slice(1)}`;
  return category && category[nameAttr] ? category[nameAttr] : "";
};

export const getMainMedia = ({ main_media }) => {
  if (main_media) {
    if (
      main_media.preview &&
      (main_media.preview.fullMediaUrl || main_media.preview.webPath)
    ) {
      return main_media.preview.fullMediaUrl
        ? main_media.preview.fullMediaUrl
        : TTP_API_URL + "/" + main_media.preview.webPath;
    } else {
      if (main_media.fullCroppedWebPath) {
        return main_media.fullCroppedWebPath;
      } else {
        return main_media.fullMediaUrl
          ? main_media.fullMediaUrl
          : `${TTP_API_URL}/${main_media.webPath}`;
      }
    }
  }
  return "/img/article-cover-small.jpg";
};

export const getAlbum = ({ albums }) => {
  let medias = null;
  if (albums && albums.length > 0) {
    medias = albums[0].medias.map((media) => {
      const path =
        media.preview && (media.preview.fullMediaUrl || media.preview.webPath)
          ? media.preview.fullMediaUrl
            ? media.preview.fullMediaUrl
            : `${TTP_API_URL}/${media.preview.webPat}`
          : media.fullMediaUrl
          ? media.fullMediaUrl
          : `${TTP_API_URL}/${media.webPath}`;
      return {
        id: media.id,
        path: path,
      };
    });
  }
  return medias;
};

export const getAuthors = ({ author, avatars }, lng = "fr") => {
  let authors = [];
  let others = [];
  if (author && author.length > 0) {
    authors = author
      .filter((a) => a.enableAvatar === true)
      .map((a) => {
        return {
          id: a.id,
          name: a.signature.title,
          headline: a.signature.head,
          avatar: a.avatar,
          avatarUrl: a.avatarUrl,
          url: `/${lng}/author/${a.url}/${a.id}`,
        };
      });
  }
  if (avatars && avatars.length > 0) {
    others = avatars.map((a) => {
      return {
        id: a.id,
        name: a.company,
        headline: a.headline,
        avatar: a.avatar,
        avatarUrl: a.avatarUrl,
      };
    });
  }

  return [...authors, ...others];
};

export const addLandaSize = (img, width = 0, height = 0) => {
  let result = img;
  let found = false;

  const splt = img.split(".");
  const ext = splt[splt.length - 1];

  if (width > 0) {
    result += `/w${width}`;
    found = true;
  }
  if (height > 0) {
    const sep = width > 0 ? "-" : "/";
    result += `${sep}h${height}`;
    found = true;
  }
  result += found ? "-noEnlarge" : "/noEnlarge";

  return `${result}.${ext}`.replace(
    "https://s3.eu-west-1.amazonaws.com/tamtam",
    "https://s3.tamtam.pro"
  );
};

export const prepareArticle = (article, navCommunityId = 0) => {
  const {
    id,
    title,
    status,
    introduction,
    organization,
    category,
    isPrivate,
    isExternal,
    externalUrl,
    countLikes,
    countDislikes,
    countComments,
    publishedAt,
  } = article;

  return {
    id,
    title,
    status,
    introduction,
    communityName:
      organization.abbreviation ||
      (organization.name.length <= 30
        ? organization.name
        : organization.name.substr(0, 30) + "..."),
    category: {
      name: getCategoryName(category, "fr"),
      colorCode: category && category.colorCode ? category.colorCode : "",
    },
    url: getArticleFullUrl(article, navCommunityId),
    mainMedia: getMainMedia(article),
    album: getAlbum(article),
    authors: getAuthors(article, "fr"),
    isPrivate,
    isExternal,
    externalUrl,
    countLikes,
    countDislikes,
    countComments,
    publishedAt,
  };
};
