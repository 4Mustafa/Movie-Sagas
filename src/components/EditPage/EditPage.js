import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';


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
        this.props.dispatch({ type: 'PUT_MOVIES', payload: { id: this.props.selectedMovies.id, newMovie: this.state } });
        this.setState({
            newMovie: {
                title: '',
                description: ''
            }
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="title" type='text' value={this.state.title} onChange={(event) => this.handleChange('title', event)} />
                    <input placeholder="description" type='text' value={this.state.description} onChange={(event) => this.handleChange('description', event)} />


                    <button type='submit' value='update  movie'>UPDATE MOVIE</button>
                </form>
            </div>
        )
    }
}




export default connect()(EditPage);