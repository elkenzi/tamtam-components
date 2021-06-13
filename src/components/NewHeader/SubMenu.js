import React, { Component } from "react";
import style from "./SubMenu.module.scss";

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVertical: false,
    };
  }

  handleOnClick = () => {
    this.setState({ isVertical: !this.state.isVertical });
  };

  renderItemMenu = (item) => {
   
    return (
      <li key={`smenu-${Math.random()}`}>
        <div
        className={style.item}>
          <img src={item.iconUrl} />
          <a href={item.url}>{item.title} </a>
        </div>
      </li>
    );
  };

  renderItemMenuWithSubmenu = (item) => {

    return (
        <li className={style.dropdown} key={`smenu-${Math.random()}`}>
        <a  href={item.url} className={style.item} >
            <img src={item.iconUrl}/>
            <a  className={style.title}>{item.title}</a>
            <i className="icon icon-arrow-down"></i>
        </a>
        <div>
            <ul>{this.renderSubmenu(item.submenu)}</ul>
            {item.more && (
                <a href={item.more.url}className={style.more}>
                        {item.more.title}
                </a>
            )}
        </div>
    </li>
    );
  };

  renderSubmenu = (data) => {
    return (
        data.map((item)=>
            
        (<li key={`smenu-${Math.random()}`}>
            <div className={this.state.isVertical ? style.subitemvertical : style.subitem}>
            
            {item.avatarUrl && (
                    <img
                        className={style.avatar}
                        src={item.avatarUrl}
                    />
             )}
             {item.iconUrl && (
                    <img
                        src={item.iconUrl}
                    />
             )}
                <a href={item.url} className="title">{item.title}</a>
            </div>
        </li>)
        
     )
    );
        
};



  render() {
    const { lng, menu, currentCommunity } = this.props;
    return (
      <div
        className={this.state.isVertical ? style.vertical : ""}
      >
        <nav className={style.container}>
          <div className={style.control} onClick={() => this.handleOnClick()}>
            <i className="icon icon-menu"></i>
          </div>
          <ul className={style.menu}>
            {menu.map((item) => {
              if (!item.community || (item.community && currentCommunity))
                return item.submenu
                  ? this.renderItemMenuWithSubmenu(item)
                  : this.renderItemMenu(item);
              else return null;
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default SubMenu;
