import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// TODO move this
export const getUserNameForAvatar = (firstName, lastName) => {
  let fName = firstName.split(" ");
  if (fName.length >= 3) {
    return extractFirstLettre(fName, 3);
  } else {
    let lName = lastName.split(" ");
    return extractFirstLettre(fName.concat(lName), 3);
  }
};

function extractFirstLettre(arrayStr, length) {
  let result = "";
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i]) {
      result += arrayStr[i].substring(0, 1);
    }
  }
  return result.toUpperCase();
}

const I18N = {
  en: {
    communities: "Communities"
  },
  fr: {
    communities: "Communautés"
  },
  nl: {
    communities: "Gemeenschappen"
  }
};

export default class Communities extends Component {
  state = {
    show: false
  };

  handleShow = () => this.setState(prevState => ({ show: !prevState.show }));

  getUserAvatar() {
    const { avatarUrl, firstName, lastName } = this.props.auth.user;

    let avatarDiv = null;
    if (avatarUrl) {
      avatarDiv = (
        <div
          className="menu__img-wrap m-b-s"
          style={{ backgroundImage: `url(${avatarUrl})` }}
        ></div>
      );
    } else {
      avatarDiv = (
        <div className="menu__img-wrap empty-avatar m-b-s">
          <span>{getUserNameForAvatar(firstName, lastName)}</span>
        </div>
      );
    }

    return avatarDiv;
  }

  renderCommunities() {
    const { communities, onCommunityChange } = this.props;

    if (!communities || communities.length === 0) {
      return null;
    }

    let clientsBlock = [];

    for (let i = 0; i < communities.length; i++) {
      let logo = communities[i].avatarUrl
        ? `${communities[i].avatarUrl}`
        : "img/default-logo.png";
      let logoBlock = (
        <span
          className="boxes__box__logo"
          style={{ backgroundImage: `url(${logo})` }}
        ></span>
      );
      let clientName = communities[i].name;
      if (communities[i].abbreviation) {
        clientName = communities[i].abbreviation;
      } else if (clientName.length > 30) {
        clientName = clientName.substr(0, 30) + "...";
      }
      clientsBlock.push(
        <li className="menu__sub-child" key={`client-${communities[i].id}`}>
          <NavLink
            to="/"
            activeClassName="active"
            onClick={() => onCommunityChange(communities[i].id)}
          >
            {logoBlock}
            {clientName}
          </NavLink>
        </li>
      );
    }

    return (
      <div className="menu__dropdown">
        <ul>{clientsBlock}</ul>
      </div>
    );
  }

  render() {
    const { currentCommunity, lng, communities } = this.props;

    if (!communities || communities.length === 0) {
      return;
    }

    let navText = I18N[lng]["Communities"];

    if (currentCommunity) {
      navText =
        currentCommunity.abbreviation ||
        (currentCommunity.name.length <= 20
          ? currentCommunity.name
          : currentCommunity.name.substring(0, 20));
    }

    return (
      <li
        className="menu__has-child menu__community flex-container p-x-m"
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleShow}
      >
        <span
          className="menu__link no-padding--left"
          style={{ cursor: "pointer" }}
        >
          <span>{navText}</span>
          {this.state.show ? (
            <i className="icon icon-arrow-up" />
          ) : (
            <i className="icon icon-arrow-down" />
          )}
        </span>
        {this.renderCommunities()}
      </li>
    );
  }
}
