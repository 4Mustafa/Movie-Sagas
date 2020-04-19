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
    /* keeps track of inputs and changes state to match inputs */
    handleChange = (propertyName, event) => {
        console.log(event.target.value);

        this.setState({
            ...this.state.newMovie,
            [propertyName]: event.target.value

        })
    }
    /* runs a dispatch sending the saved state as a payload */
    handleSubmit = () => {
        console.log('new movie info  is ', this.state);
        this.props.dispatch({ type: 'PUT_MOVIES', payload: this.state.newMovie })


    }
    /* sends user back a page */
    handleBack = () => {
        this.props.history.push('/DetailPage')
    }
    render() {
        return (
            <div>
                <header>EDIT MOVIE</header>
                <h1>  <img src={this.props.selectedMovies.poster} /></h1>
                <h1>  enter new title and description below </h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="title" type='text' value={this.state.title} onChange={(event) => this.handleChange('title', event)} />
                    <input placeholder="description" type='text' value={this.state.description} onChange={(event) => this.handleChange('description', event)} />
                    <button type='submit' value='update  movie'>EDIT MOVIE</button>
                    <button onClick={this.handleBack}> BACK</button>
                </form>
            </div>
        )
    }
}



const putPropsOnReduxStore = (reduxStore) => ({
    selectedMovies: reduxStore.selectedMovies
});
export default withRouter(connect(putPropsOnReduxStore)(EditPage));

