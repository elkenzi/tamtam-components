import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { Article } from "./Article";

export default {
  title: "Article",
  component: Article,
  decorators: [
    StoryRouter(),
    story => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs
  ]
};

export const Small = () => (
  <Article
    size="small"
    category="Droit"
    community="ITAA"
    title="Tempore quo primis auspiciis in mundanum fulgorem surgeret Tempore quo primis auspiciis in mundanum fulgorem surgeret"
    summary="Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans halassius vero ea temt empestate vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans ea tempestate praefectus praetorio praesens ipse quoque adrogantis"
    url="https://s3.tamtam.pro/v2/storage/media/IMAGE/10734/5787ad358aca73e88049f053f60ab0d542934e85.jpeg"
    avatarUrl="https://s3.tamtam.pro/v2/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png"
    authorName="Emmanuel Degrève"
    authorSignature="Partner et Conseil Fiscal"
    likeCount="16"
    disLikeCount="11"
    commentCount="32"
    shareCount="3"
    favoriteCount="5"
  />
);

export const Large = () => (
  <div style={{ width: "632px", height: "485px" }}>
    <Article
      size="large"
      category="Droit"
      community="ITAA"
      title="Tempore quo primis auspiciis in mundanum fulgorem surgeret Tempore quo primis auspiciis in mundanum fulgorem surgeret"
      summary="Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans halassius vero ea temt empestate vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans ea tempestate praefectus praetorio praesens ipse quoque adrogantis"
      url="https://s3.tamtam.pro/v2/storage/media/IMAGE/10734/5787ad358aca73e88049f053f60ab0d542934e85.jpeg"
      avatarUrl="https://s3.tamtam.pro/v2/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png"
      authorName="Emmanuel Degrève"
      authorSignature="Partner et Conseil Fiscal"
      likeCount="16"
      disLikeCount="11"
      commentCount="32"
      shareCount="3"
      favoriteCount="5"
    />
  </div>
);
