import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { AuthorCard } from "./AuthorCard";
import { Fetching } from "./Fetching";

const author = {
  id: 8650,
  firstName: "Emmanuel",
  lastName: "Degrève",
  headline: "Président de la Fondation Forum For the Future",
  nbArticle: 122,
  avatar:
    "storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
  avatarUrl:
    "https://s3.tamtam.pro/prod/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",

  metas: {
    organization: {
      name: "Bloom Tax",
      url: "https://bloom-law.be/",
      path:
        "https://s3.tamtam.pro/prod/organization/metas/371416847c7d3f7aa603014c0bd36b31dc749a8f-BloomLaw.jpg",
    },
  },
  contactSocialNetworks: {
    facebook: {
      id: 568543643,
      username: "Emmanuel Degrève",
      publicProfileUrl: null,
    },
    twitter: {
      id: 175482549,
      username: "emmanueldegreve",
      publicProfileUrl: null,
    },
    linkedin: {
      id: "dnuRIWeubQ",
      username: "Emmanuel Degrève",
      publicProfileUrl: null,
    },
  },
};

export default {
  title: "AuthorCard",
  component: AuthorCard,
  decorators: [
    StoryRouter(),
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs,
  ],
};

export const Default = () => (
  <div
    className="grid-container"
    style={{ background: "#FAFBFB", padding: "200px 20px 20px" }}
  >
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-4">
        <AuthorCard
          onAvatarClick={action("onAvatarClick")}
          author={author}
          lng="en"
        />
      </div>
    </div>
  </div>
);

export const FetchingAuthor = () => (
  <div
    className="grid-container"
    style={{ background: "#FAFBFB", padding: "200px 20px 20px" }}
  >
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-4">
        <AuthorCard isFetching={true} />
      </div>
    </div>
  </div>
);
