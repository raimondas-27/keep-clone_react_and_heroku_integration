import React, {Component} from 'react';

class OneNote extends Component {
   state = {}

   render() {
      return (
          <div>
             <p>{this.props.singleNote.title}</p>
             <p> {this.props.singleNote.body}</p>
          </div>
      );
   }
}

export default OneNote;