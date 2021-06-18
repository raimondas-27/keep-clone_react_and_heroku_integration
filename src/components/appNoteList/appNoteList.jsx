import React, {Component} from 'react';
import OneNote from "../common/oneNote/oneNote";

class AppNoteList extends Component {
   state = {};

   render() {

      const {notes} = this.props

      return (
          <div className="note-list">
             {notes.map((note) => (
                 <OneNote singleNote={note}  key={note._id}/>
             ))}
          </div>
      );
   }

}

export default AppNoteList;