import React, {Component} from 'react';
import linkStyle from "./myLink.module.css"

class MyLink extends Component {
   state = {}

   render() {
      return (
          <div>
             <a className={this.props.active ? linkStyle.active : linkStyle.link} href="/">
                <i className={`fa fa-${this.props.icon}`}></i>
                {this.props.children}
             </a>
          </div>
      );
   }
}

export default MyLink;