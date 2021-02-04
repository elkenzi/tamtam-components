import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { UserCard } from "./UserCard";

const user = {
  // avatar:
  //   "storage/media/IMAGE/6227/AVATAR_8fd1ef687196faf8db7d4a8bce0d4bd0f1cbc134.png",
  // avatarUrl:
  //   "https://s3.tamtam.pro/rc/storage/media/IMAGE/6227/AVATAR_8fd1ef687196faf8db7d4a8bce0d4bd0f1cbc134.png",
  id: "",
  firstName: "Jean",
  lastName: "BAETEN",
  isSelected: false,
  lng: "en",
  blogRoleInOrganization: [
    {
      meta: {
        headlines: {
          en: "Head Tax @ VB0-FEB",
          fr: "Head Tax @ FEB",
          nl: "Head Tax @ VBO",
        },
      },
      role: "REDACTOR",
      mandated: false,
    },
  ],
};

export default {
  title: "UserCard",
  component: UserCard,
  decorators: [
    StoryRouter(),
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs,
  ],
};

export const Light = () => (
  <div class="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <UserCard theme="light" {...user} />
      </div>
    </div>
  </div>
);

export const LightEdit = () => (
  <div class="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <UserCard
          theme="light"
          showAvatarEdit={true}
          onAvatarClick={action("onAvatarClick")}
          {...user}
        />
      </div>
    </div>
  </div>
);

export const Dark = () => (
  <div style={{ background: "#29394d", padding: "3rem" }}>
    <div class="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-4 large-3">
          <UserCard theme="dark" {...user} />
        </div>
      </div>
    </div>
  </div>
);

export const DarkEdit = () => (
  <div style={{ background: "#29394d", padding: "3rem" }}>
    <div class="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-4 large-3">
          <UserCard
            theme="dark"
            showAvatarEdit={true}
            onAvatarClick={action("onAvatarClick")}
            {...user}
          />
        </div>
      </div>
    </div>
  </div>
);
