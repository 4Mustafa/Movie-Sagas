import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class DetailPage extends Component {
    handleBack = () => {
        this.props.history.push('/')
    }
    handleEdit = () => {
        this.props.history.push('/EditPage')
    }

    render() {

        return (
            <div>
                <h1>VIEW MOVIE</h1>
                <>

                    {/* {this.props.selectedMovies.map(movie =>
                        <li onClick={this.handleClick}>
                            <img src={movie.poster} alt={movie.id} />
                        </li>)} */}
                    <li>
                        <button onClick={this.handleBack}>GO BACK</button>
                    </li>
                    <li>
                        <button onClick={this.handleEdit}>EDIT</button>

                    </li>
                </>

            </div>
        )
    }
}


const putPropsOnReduxStore = (reduxStore) => ({
    movies: reduxStore.selectedMovies,
});



export default withRouter(connect(putPropsOnReduxStore)(DetailPage));

