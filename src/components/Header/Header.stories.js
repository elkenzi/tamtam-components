import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object,
  array
} from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { Header } from "./Header";
import {
  user,
  communities,
  settings,
  apps,
  notifications
} from "./Header.data";

export default {
  title: "Header",
  decorators: [
    StoryRouter(),
    story => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs
  ]
};

export const LoggedInHeader = () => (
  <Header
    loggedIn={true}
    lng={select("lng", ["fr", "nl", "en"], "fr")}
    appName="E-mailing"
    appLogoUrl="https://s3.tamtam.pro/v2/apps/emailing.png"
    profileUrl="https://uat2.tamtam.pro/profile"
    homeUrl=""
    eboxUrl="https://uat2.emailing.tamtam.pro/e_box"
    user={object("user", user)}
    communities={object("communities", communities)}
    currentCommunity={communities[0]}
    onCommunityChange={action("onCommunityChange")}
    settings={object("settings", settings)}
    apps={object("apps", apps)}
    notifications={object("notifications", notifications)}
    onLanguageChange={action("onLanguageChange")}
    onLogout={action("onLogout")}
  />
);

export const LoggedOutHeader = () => (
  <Header
    loggedIn={false}
    lng={select("language", ["fr", "nl", "en"], "fr")}
    appName="E-mailing"
    appLogoUrl="https://s3.tamtam.pro/v2/apps/emailing.png"
    onLanguageChange={action("onLanguageChange")}
  />
);
