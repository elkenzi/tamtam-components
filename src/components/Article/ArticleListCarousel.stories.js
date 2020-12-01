import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { ArticleListCarousel } from "./ArticleListCarousel";

export default {
  title: "ArticleListCarousel",
  component: ArticleListCarousel,
  decorators: [
    StoryRouter(),
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs,
  ],
};

const article = {
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
};
const dispositions = ["type7", "type3", "type7", "default", "type2"];
let articles = [];
for (let i = 1; i < 24; i++) {
  let art = { ...article };
  art.title = i + " " + article.title;
  articles.push(art);
}

export const Default = () => (
  <div class="grid-container">
    <ArticleListCarousel dispositions={dispositions} articles={articles} />
  </div>
);
