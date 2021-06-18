import React, {Component} from 'react';
import AppNoteList from "./components/appNoteList/appNoteList";
import AppAddNote from "./components/appAddNote/appAddNote";
import AppAside from "./components/appAside/appAside";
import AppNavbar from "./components/appNavbar/appNavbar";
import "./App.css";

class App extends Component {
   state = {
      notes: [],
      noteId : 1,
   };

   handleNewNote = (newNote) => {
      console.log('adding new note');
      const newNoteOb = this.createNewNote(newNote);
      console.log(newNoteOb);
      const notesCopy = [...this.state.notes, newNoteOb]
      this.setState({notes: notesCopy, noteId: this.state.noteId + 1})
   };

   createNewNote = (newNote) => {
      return {_id: this.state.noteId, ...newNote, isPinned:false}
   }

   render() {
      return (
          <div className="App">
             <AppNavbar/>
             <AppAside/>
             <AppAddNote onNewNote={this.handleNewNote} />
             <AppNoteList/>
          </div>
      );
   }
}

export default App;
