import React, {Component} from 'react';
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
                <MyLink icon="edit" to="/edit">
                   Edit
                </MyLink>
                <MyLink icon="trash" to="/trash">
                   Trash
                </MyLink>
             </div>
          </div>
      );
   }
}

export default AppAside;