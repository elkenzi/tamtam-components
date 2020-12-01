import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { Article } from "./Article";

export default {
  title: "Article",
  component: Article,
  decorators: [
    StoryRouter(),
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs,
  ],
};

export const DefaultSmall = () => (
  <div class="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4">
        <Article
          size="small"
          publishedAt={1604068542385}
          category={text("category", "Droit")}
          community="ITAA"
          title={text(
            "title",
            "Tempore quo primis auspiciis in mundanum fulgorem surgeret Tempore quo primis auspiciis in mundanum fulgorem surgeret"
          )}
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
    </div>
  </div>
);

export const DefaultLarge = () => (
  <div class="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-8">
        <Article
          size="large"
          publishedAt={1604068542385}
          category="Droit"
          community="ITAA"
          title="Tempore quo primis auspiciis in mundanum fulgorem surgeret Tempore quo primis auspiciis in mundanum fulgorem surgeret"
          summary="Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans halassius vero ea temt empestate vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans ea tempestate praefectus praetorio praesens ipse quoque adrogantis"
          showSummary={true}
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
    </div>
  </div>
);

export const Type2 = () => (
  <div class="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4">
        <Article
          type="type2"
          publishedAt={1604068542385}
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
    </div>
  </div>
);

export const Type3 = () => (
  <div class="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-6">
        <Article
          type="type3"
          publishedAt={1604068542385}
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
    </div>
  </div>
);

export const Type4 = () => (
  <div class="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4">
        <Article
          type="type4"
          publishedAt={1604068542385}
          category="Droit"
          community="ITAA"
          title="Accord de gouvernement : l’ITAA salue l’objectif de simplification et appelle à l’usage parcimonieux de la fiscalité comme incitant."
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
    </div>
  </div>
);
