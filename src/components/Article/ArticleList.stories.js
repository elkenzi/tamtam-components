import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { ArticleList } from "./ArticleList";
import jsonData from "./data2.json";
const articles = jsonData.data;

export default {
  title: "ArticleList",
  component: ArticleList,
  decorators: [
    StoryRouter(),
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs,
  ],
};

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
