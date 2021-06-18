import React, {Component} from 'react';
import * as ReactDOM from "react-dom";
import {Form, Field, FormElement} from "@progress/kendo-react-form";
import {Error} from "@progress/kendo-react-labels";
import {Input} from "@progress/kendo-react-inputs";
import "./style.css"

class AppAddNote extends Component {
   state = {
      newNote: {
         title: "",
         body: "",
      }
   };


   handleSubmit = (event) => {
      console.log("veikia")
      event.preventDefault();
      this.props.onNewNote(this.state.newNote)
   }

   syncInput = (event) => {
      this.setState({newNote: {...this.state.newNote, [event.target.name]: event.target.value}})
   }

   render() {

      const {newNote} = this.state;
      return (
          <div className="add-note">
             <Form
                 autoComplete="off"
                 render={(formRenderProps) => (
                     <FormElement onSubmit={this.handleSubmit}
                                  style={{maxWidth: 250}}>
                        <fieldset className={"k-form-fieldset"}>
                           <legend className={"k-form-legend"}>
                              Please fill in the fields:
                           </legend>
                           <div className="mb-3">
                              <Field
                                  name="title"
                                  component={Input}
                                  label="Title"
                                  value={newNote.title}
                                  onChange={this.syncInput}
                                  type="text"

                              />
                           </div>

                           <div className="mb-3">
                              <Field name="body"
                                     component={Input}
                                     label="Take a note..."
                                     onChange={this.syncInput}
                                     value={newNote.body}
                              />
                           </div>
                        </fieldset>
                        <div className="k-form-buttons">
                           <button
                               type="submit"
                               className="k-button"
                           >
                              Submit
                           </button>
                        </div>
                     </FormElement>
                 )}
             />
          </div>
      );
   }
}

export default AppAddNote;