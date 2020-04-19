import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class HomePage extends Component {
    state = {
        movie: []
    }
    /* gets all movies on page load */
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' });
    }
    /* send user to next page on the click of the <li> */
    handleClick = (event) => {
        console.log('in handleClick');
        this.props.history.push('/DetailPage');

    }

    render() {
        return (
            <div>

                <header>SELECT A MOVIE</header>
                {/* map through movies reducer and append selected information */}
                {this.props.movies.map(movie =>
                    <>
                        <h1 onClick={this.handleClick}>
                            {/* click of the image runs the dispatch to hold selected movie in a reducer */}
                            <img src={movie.poster} alt={movie.id} onClick={() => this.props.dispatch({ type: 'SElECT_MOVIES', payload: movie })} />
                        </h1>


                    </>

                )}


            </div>
        )
    }
}




const putPropsOnReduxStore = (reduxStore) => ({
    movies: reduxStore.movies,

});



export default withRouter(connect(putPropsOnReduxStore)(HomePage));




