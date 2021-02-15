import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { Article } from "./Article";

import jsonData from "./data2.json";

// import articles from "../../articles2.js";

const articles = jsonData.data;
// const article = jsonData.data[0];
console.log(jsonData.data.length);

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
          article={articles[Math.floor(Math.random() * 21)]}
          size="small"
          isFetching={boolean("isFetching", false)}
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
          article={articles[Math.floor(Math.random() * 21)]}
          size="large"
          showSummary={true}
          isFetching={boolean("isFetching", false)}
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
          article={articles[Math.floor(Math.random() * 21)]}
          showSummary={true}
          type="type2"
          isFetching={boolean("isFetching", false)}
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
          article={articles[Math.floor(Math.random() * 21)]}
          showSummary={true}
          type="type3"
          showStatus={boolean("showStatus", false)}
          onDelete={() => console.log("onDelete")}
          onPublish={() => console.log("onPublish")}
          onEdit={() => console.log("onEdit")}
          isFetching={boolean("isFetching", false)}
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
          article={articles[Math.floor(Math.random() * 21)]}
          showSummary={true}
          type="type4"
          isFetching={boolean("isFetching", false)}
        />
      </div>
    </div>
  </div>
);
