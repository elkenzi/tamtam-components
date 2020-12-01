import React, { Component } from "react";
import PropTypes from "prop-types";

import { Article } from "../Article/Article";
import styles from "./ArticleList.module.scss";

export class ArticleList extends Component {
  render() {
    switch (this.props.type) {
      case "type2":
        return this.renderType2();
        break;
      case "type3":
        return this.renderType3();
        break;
      case "type4":
        return this.renderType4();
        break;
      case "type5":
        return this.renderType5();
        break;
      case "type6":
        return this.renderType6();
        break;
      case "type7":
        return this.renderType7();
        break;
      default:
        return this.renderDefault();
    }
  }

  renderDefault() {
    const { articles } = this.props;
    if (!articles || articles.length === 0) {
      return null;
    }

    return (
      <div
        className={`${styles.articleList1} grid-x grid-margin-x grid-margin-x`}
      >
        <div className="cell small-12 medium-8">
          <Article size="large" showSummary={true} {...articles[0]} />
        </div>
        {articles.length > 1 && (
          <div className={`cell small-12 medium-4`}>
            <div className={styles.articleTpl1_btm}>
              <Article {...articles[1]} />
            </div>
            {articles.length > 2 && <Article {...articles[2]} />}
          </div>
        )}
      </div>
    );
  }

  renderType2() {
    const { articles } = this.props;
    if (!articles || articles.length === 0) {
      return null;
    }

    return (
      <div className={`${styles.articleList1} grid-x`}>
        <div className="cell small-12 medium-4">
          <Article type="type2" {...articles[0]} />
        </div>
        {articles.length > 1 && (
          <div className={`${styles.articleTpl1} cell small-12 medium-8`}>
            <Article type="type3" {...articles[1]} />
          </div>
        )}
      </div>
    );
  }

  renderType3() {
    const { articles } = this.props;
    if (!articles || articles.length === 0) {
      return null;
    }

    return (
      <div className={`${styles.articleList1} grid-x`}>
        <div className="cell small-12 medium-4">
          <Article type="type2" {...articles[0]} />
        </div>
        {articles.length > 1 && (
          <div className={`${styles.articleTpl1} cell small-12 medium-8`}>
            <Article size="medium" {...articles[1]} />
          </div>
        )}
      </div>
    );
  }

  renderType4() {
    const { articles } = this.props;
    if (!articles || articles.length === 0) {
      return null;
    }

    return (
      <div className={`${styles.articleList1} grid-x grid-margin-x`}>
        <div className="cell small-12 medium-4">
          <Article type="type4" {...articles[0]} />
        </div>
        {articles.length > 1 && (
          <div className="cell small-12 medium-4">
            <Article type="type4" {...articles[1]} />
          </div>
        )}
        {articles.length > 2 && (
          <div className="cell small-12 medium-4">
            <Article type="type4" {...articles[2]} />
          </div>
        )}
      </div>
    );
  }

  renderType5() {
    const { articles } = this.props;
    if (!articles || articles.length === 0) {
      return null;
    }

    return (
      <div className={`${styles.articleList1} grid-x`}>
        <div className="cell small-12 medium-4">
          <Article size="smallBH" {...articles[0]} />
        </div>
        {articles.length > 1 && (
          <div className={`${styles.articleTpl1} cell small-12 medium-8`}>
            <Article size="smallBH" {...articles[1]} />
          </div>
        )}
      </div>
    );
  }

  renderType6() {
    const { articles } = this.props;
    if (!articles || articles.length === 0) {
      return null;
    }

    return (
      <div className={`${styles.articleList1} grid-x grid-margin-x`}>
        <div className="cell small-12 medium-4">
          <Article type="type2" {...articles[0]} />
        </div>
        {articles.length > 1 && (
          <div className="cell small-12 medium-4">
            <Article type="type2" {...articles[1]} />
          </div>
        )}
        {articles.length > 2 && (
          <div className="cell small-12 medium-4">
            <Article type="type2" {...articles[2]} />
          </div>
        )}
      </div>
    );
  }

  renderType7() {
    const { articles } = this.props;
    if (!articles || articles.length === 0) {
      return null;
    }

    return (
      <div className={`${styles.articleList1} grid-x`}>
        <div className="cell small-12 medium-4">
          <Article size="medium" {...articles[0]} />
        </div>
        {articles.length > 1 && (
          <div className={`${styles.articleTpl1} cell small-12 medium-8`}>
            <Article type="type3" {...articles[1]} />
          </div>
        )}
      </div>
    );
  }
}

Article.propTypes = {
  type: PropTypes.oneOf([
    "default",
    "type2",
    "type3",
    "type4",
    "type5",
    "type6",
    "type7",
  ]),
  articles: PropTypes.array,
};
