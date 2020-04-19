import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class EditPage extends Component {
    state = {
        newMovie: {
            title: '',
            description: ''
        }
    }

    handleChange = (propertyName, event) => {
        this.setState({
            ...this.state.newPlant,
            [propertyName]: event.target.value
        })
    }
    handleSubmit = () => {
        console.log('new movie info  is ', this.state);
        this.props.dispatch({ type: 'PUT_MOVIES', payload: { newMovie: this.state } });
        this.setState({
            newMovie: {
                title: '',
                description: ''
            }
        })

    }
    handleBack = () => {
        this.props.history.push('/DetailPage')
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}



const putPropsOnReduxStore = (reduxStore) => ({
    selectedMovies: reduxStore.selectedMovies
});
export default withRouter(connect(putPropsOnReduxStore)(EditPage));

