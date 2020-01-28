import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Header } from "./Header";

export const actions = {
  onLanguageChange: action("onLanguageChange")
};

storiesOf("Header", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => {
    return (
      <Header
        loggedIn={true}
        language="fr"
        appName="Media"
        appLogoUrl="http://rc.media.tamtam.pro/img/apps/medias.png"
        firstName="Emmanuel"
        lastName="Degrève"
        avatarUrl="https://s3.eu-west-1.amazonaws.com/tamtam/uat/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png"
        profileUrl="https://uat2.tamtam.pro/profile"
        eboxUrl="https://uat2.emailing.tamtam.pro/e_box"
        {...actions}
      />
    );
  })
  .add("loggedOut", () => {
    return (
      <Header
        loggedIn={false}
        language="fr"
        appName="Media"
        appLogoUrl="http://rc.media.tamtam.pro/img/apps/medias.png"
        {...actions}
      />
    );
  });
// .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
// .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);
