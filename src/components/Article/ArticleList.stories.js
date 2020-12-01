import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { ArticleList } from "./ArticleList";

export default {
  title: "ArticleList",
  component: ArticleList,
  decorators: [
    StoryRouter(),
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs,
  ],
};

const articles = [
  {
    publishedAt: 1604068542385,
    category: "Droit",
    community: "ITAA",
    title:
      "Tempore quo primis auspiciis in mundanum fulgorem surgeret Tempore quo primis auspiciis in mundanum fulgorem surgeret",
    summary:
      "Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans halassius vero ea temt empestate vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans ea tempestate praefectus praetorio praesens ipse quoque adrogantis",
    url:
      "https://s3.tamtam.pro/v2/storage/media/IMAGE/10734/5787ad358aca73e88049f053f60ab0d542934e85.jpeg",
    avatarUrl:
      "https://s3.tamtam.pro/v2/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
    authorName: "Emmanuel Degrève",
    authorSignature: "Partner et Conseil Fiscal",
  },
  {
    publishedAt: 1604068542385,
    category: "Droit",
    community: "ITAA",
    title:
      "Tempore quo primis auspiciis in mundanum fulgorem surgeret Tempore quo primis auspiciis in mundanum fulgorem surgeret",
    summary:
      "Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans halassius vero ea temt empestate vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans ea tempestate praefectus praetorio praesens ipse quoque adrogantis",
    url:
      "https://s3.tamtam.pro/v2/storage/media/IMAGE/10734/5787ad358aca73e88049f053f60ab0d542934e85.jpeg",
    avatarUrl:
      "https://s3.tamtam.pro/prod/storage/media/IMAGE/16253/AVATAR_d1979b64b28825bb71e127789c41ab2a81515b9e.png",
    authorName: "Emmanuel Degrève",
    authorSignature: "Partner et Conseil Fiscal",
  },
  {
    publishedAt: 1604068542385,
    category: "Droit",
    community: "ITAA",
    title:
      "Tempore quo primis auspiciis in mundanum fulgorem surgeret Tempore quo primis auspiciis in mundanum fulgorem surgeret",
    summary:
      "Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans halassius vero ea temt empestate vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans ea tempestate praefectus praetorio praesens ipse quoque adrogantis",
    url:
      "https://s3.tamtam.pro/v2/storage/media/IMAGE/10734/5787ad358aca73e88049f053f60ab0d542934e85.jpeg",
    avatarUrl:
      "https://s3.tamtam.pro/v2/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
    authorName: "Emmanuel Degrève",
    authorSignature: "Partner et Conseil Fiscal",
  },
];

export const Default = () => <ArticleList articles={articles} />;

export const Type2 = () => (
  <div class="grid-container">
    <ArticleList type="type2" articles={articles} />
  </div>
);

export const Type3 = () => (
  <div class="grid-container">
    <ArticleList type="type3" articles={articles} />
  </div>
);

export const Type4 = () => (
  <div class="grid-container">
    <ArticleList type="type4" articles={articles} />
  </div>
);

export const Type5 = () => (
  <div class="grid-container">
    <ArticleList type="type5" articles={articles} />
  </div>
);

export const Type6 = () => (
  <div class="grid-container">
    <ArticleList type="type6" articles={articles} />
  </div>
);

export const Type7 = () => (
  <div class="grid-container">
    <ArticleList type="type7" articles={articles} />
  </div>
);
