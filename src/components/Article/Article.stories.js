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

import { Article } from "./Article";

export default {
  title: "Article",
  decorators: [
    StoryRouter(),
    story => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs
  ]
};

export const SmallArticle = () => <Article />;
export const LargeArticle = () => (
  <div style={{ width: "632px", height: "485px" }}>
    <Article size="large" />
  </div>
);
