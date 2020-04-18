import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';


export class EditPage extends Component {
    state = {

    }



    render() {
        return (
            <div>
                <input></input>

            </div>
        )
    }
}




export default connect()(EditPage);