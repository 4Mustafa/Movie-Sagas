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
        console.log(event.target.value);

        this.setState({
            ...this.state.newPlant,
            [propertyName]: event.target.value

        })
    }
    handleSubmit = () => {
        console.log('new movie info  is ', this.state);
        this.props.dispatch({ type: 'PUT_MOVIES', payload: this.state.newMovie })


    }
    handleBack = () => {
        this.props.history.push('/DetailPage')
    }
    render() {
        return (
            <div>
                <img src={this.props.selectedMovies.poster} />
                {this.props.selectedMovies.name}
                {this.props.selectedMovies.description}
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="title" type='text' value={this.state.title} onChange={(event) => this.handleChange('title', event)} />
                    <input placeholder="description" type='text' value={this.state.description} onChange={(event) => this.handleChange('description', event)} />
                    <button type='submit' value='update  movie'>UPDATE MOVIE</button>
                    <button onClick={this.handleBack}>GO BACK</button>
                </form>
            </div>
        )
    }
}



const putPropsOnReduxStore = (reduxStore) => ({
    selectedMovies: reduxStore.selectedMovies
});
export default withRouter(connect(putPropsOnReduxStore)(EditPage));

