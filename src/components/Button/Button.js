import React, { Component } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";
import IconLoader from "../Icons/IconLoader";

class Button extends Component {
render(){
  const {inProcess ,variant="primary",children,...args} = this.props;

  
      return (
        <div> 
        { !inProcess && (
            <button className={classnames(styles.button, styles[variant])}>
              {children}
            </button>
            )
        }
          
        { inProcess  && (
            <button className={classnames(styles.button, styles[variant])}>
              <IconLoader/>
            </button>
          )
         }
         
        </div>
        );
     
      
  }
    
  };

export default Button;
