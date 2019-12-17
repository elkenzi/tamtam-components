import {
  TTP_API_URL,
  COMMUNITY_NAME_MAX_LENGTH,
  COMMUNITY_DEFAULT_LOGO_URL
} from "Config";

export const getCommunityDisplayName = community => {
  return (
    community.abbreviation ||
    (community.name.length <= COMMUNITY_NAME_MAX_LENGTH
      ? community.name
      : community.name.substring(0, COMMUNITY_NAME_MAX_LENGTH) + " ...")
  );
};

export const getCommunityRoute = community => {
  return `/community/${community.url}/${community.id}`;
};

export const getCommunityLogoUrl = community => {
  return community && community.avatarWebPath
    ? `${TTP_API_URL}/${community.avatarWebPath}`
    : COMMUNITY_DEFAULT_LOGO_URL;
};

export const getAllowedMediaTypes = community => {
  if (!community) {
    return getAllAllowedMediaTypes();
  }
  if (
    community &&
    community.mediaSettings &&
    community.mediaSettings.preferences &&
    community.mediaSettings.preferences.generalTypes
  ) {
    return community.mediaSettings.preferences.generalTypes.split(",");
  }

  return [];
};

export const getAllAllowedMediaTypes = () => {
  return ["IMAGE", "VIDEO", "PDF", "PPT"];
};

export const getAllowedLanguages = community => {
  if (
    community &&
    community.mediaSettings &&
    community.mediaSettings.preferences &&
    community.mediaSettings.preferences.languages
  ) {
    return community.mediaSettings.preferences.languages.split(",");
  }

  return [];
};

export const getUserMediaRole = (community, type) => {
  if (community && community.mediaSettings && community.mediaSettings.roles) {
    return community.mediaSettings.roles[`${type.toLowerCase()}Role`];
  }

  return null;
};

export const getUserAllowedLanguages = community => {
  if (
    community &&
    community.mediaSettings &&
    community.mediaSettings.roles &&
    community.mediaSettings.roles.preferences &&
    community.mediaSettings.roles.preferences.languages !== undefined
  ) {
    return community.mediaSettings.roles.preferences.languages.split(",");
  }

  return getAllowedLanguages(community);
};
