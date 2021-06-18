import React, { Component } from 'react';
import MyLink from "../common/myLink/myLink";

class AppAside extends Component {
  state = {};
  render() {
    return (
      <div className="aside">
        <div>
           <MyLink active icon="home" to="/">
              Home
           </MyLink>
           <MyLink icon="bell" to="/reminders">
              Reminders
           </MyLink>
        </div>
      </div>
    );
  }
}

export default AppAside;