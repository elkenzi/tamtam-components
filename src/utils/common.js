import axios from "axios";
import { pushSourceToken as pushSourceTokenAction } from "Actions";
import moment from "moment";
import _ from "i18n";

import {
  TTP_HOME_URL,
  TTP_PORTAL_URL,
  TTP_BLOG_URL,
  TTP_DEG_BLOG,
  TTP_FFF_BLOG,
  TTP_BE_ACCOUNTANTS_BLOG
} from "Config";

const API_DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

// TODO review this
export function isServiceActivated(service, resources, activatedPrefix = true) {
  for (let resource of resources) {
    if (
      false === activatedPrefix &&
      undefined !== resource.service &&
      1 === resource.service * 1
    ) {
      return true;
    }

    if (
      true === activatedPrefix &&
      undefined !== resource[`${service}Activated`] &&
      1 === resource[`${service}Activated`] * 1
    ) {
      return true;
    }
  }
  return false;
}

export function updateSourceToken(oldSourceToken, newSourceToken) {
  if (oldSourceToken) {
    oldSourceToken.cancel("Operation canceled by the user.");
  }
  return newSourceToken;
}
export function pushSourceToken(sourceName, dispatch) {
  let sourceToken = getSourceToken();
  dispatch(pushSourceTokenAction(sourceName, sourceToken));
  return sourceToken;
}
export function getSourceToken() {
  let CancelToken = axios.CancelToken;
  return CancelToken.source();
}

export const slugify = string => {
  return string
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

export const getDefaultLanguage = () => {
  let lng = navigator.language || navigator.userLanguage;
  lng = lng.split("-")[0];
  return ["fr", "en", "nl"].includes(lng) ? lng : "en";
};

// TODO review this
const MyError = { response: { status: 700 } };
export function throwCatchedError(thrown) {
  if (axios.isCancel(thrown)) {
    throw MyError;
  } else {
    throw thrown;
  }
}

export const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const redirectToHome = (returnTo = "") => {
  const goto = encodeURI(TTP_PORTAL_URL + "/" + returnTo);
  window.location.assign(`${TTP_HOME_URL}?goto=${goto}`);
};

export function sortTags(tags, lng) {
  let sortedTags = tags;

  switch (lng) {
    case "en":
      sortedTags = tags.sort(function(a, b) {
        return a.nameEn === b.nameEn ? 0 : +(a.nameEn > b.nameEn) || -1;
      });
      break;
    case "fr":
      sortedTags = tags.sort(function(a, b) {
        return a.nameFr === b.nameFr ? 0 : +(a.nameFr > b.nameFr) || -1;
      });
      break;
    case "nl":
      sortedTags = tags.sort(function(a, b) {
        return a.nameNl === b.nameNl ? 0 : +(a.nameNl > b.nameNl) || -1;
      });
      break;
    default:
  }

  return sortedTags;
}

export const getTagNameAttr = lng => {
  return `name${lng.charAt(0).toUpperCase() + lng.slice(1)}`;
};

export const htmlDecode = strData => {
  if (strData && typeof strData === "string") {
    return strData.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec);
    });
  }
  return "";
};

export const unescapeHtml = safe => {
  if (safe && typeof safe === "string") {
    return safe
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, `"`)
      .replace(/&#039;/g, "'");
  }
};

export const purifyString = string => {
  return htmlDecode(unescapeHtml(string));
};

export function getTo(article, auth) {
  const { url, id, organization, lng } = article;
  let to = `article/${url}/${id}?lng=${lng}`;

  if (
    organization &&
    [4, 8, 9, 105].indexOf(parseInt(organization.id, 10)) !== -1
  ) {
    const { loggedAs, token, user, expiresIn, createdAt } = auth;

    if (loggedAs && loggedAs !== "GUEST_FROM_NL" && loggedAs !== "GUEST") {
      to += `&token=${token}&email=${user.mainEmail}&id=${
        user.id
      }&expiresIn=${expiresIn}&createdAt=${createdAt}`;
    }
    if (
      parseInt(organization.id, 10) === 9 ||
      parseInt(organization.id, 10) === 105
    ) {
      return `${TTP_FFF_BLOG}/${to}`;
    } else if (parseInt(organization.id, 10) === 8) {
      return `${TTP_BE_ACCOUNTANTS_BLOG}/${to}`;
    } else if (parseInt(organization.id, 10) === 4) {
      return `${TTP_DEG_BLOG}/${to}`;
    }
  }

  return `${TTP_BLOG_URL}/${to}`;
}

export function getTagName(tag, currentLanguage) {
  let languages = ["nameEn", "nameFr", "nameNl"].filter(
    e => e !== currentLanguage
  );

  for (var i = 0; i < languages.length; i++) {
    let lng = languages[i];
    if (tag[lng] != null && tag[lng].trim !== "") {
      return tag[lng];
    }
  }

  return "";
}

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

const monthShortNames = [
  _("Jan"),
  _("Feb"),
  _("Mar"),
  _("Apr"),
  _("May"),
  _("Jun"),
  _("Jul"),
  _("Aug"),
  _("Sep"),
  _("Oct"),
  _("Nov"),
  _("Dec")
];

export const getDateInTwoParts = stringDate => {
  let parts = stringDate.split(" ");
  let datePart = parts[0].split("-");
  let timePart = parts[1].split(":");

  const [year, month, day] = datePart;
  const [hours, minutes, seconds] = timePart;

  return {
    time: hours + ":" + minutes,
    date: day + " " + monthShortNames[month - 1]
  };
};

/**
 * Convert a date from UTC to client Timezone
 *
 * @param date string
 * @param srcFormat string
 * @param destFormat string
 *
 * @return string formatted local date (in destFormat format)
 */
export function convertDateFromUTC(
  date,
  srcFormat = API_DATE_FORMAT,
  destFormat = API_DATE_FORMAT
) {
  if (!date) {
    return "";
  }

  var offsetMinutes = new Date().getTimezoneOffset();
  return moment(date, [srcFormat])
    .subtract(offsetMinutes, "minutes")
    .format(destFormat);
}

/**
 * Assert if an attachment is a PDF
 *
 * @param attachment object
 *
 * @return bool
 */
export function attachmentIsPDF(attachment) {
  return (
    attachment &&
    attachment.webPath &&
    attachment.webPath
      .split(".")
      .pop()
      .toLowerCase() === "pdf"
  );
}
