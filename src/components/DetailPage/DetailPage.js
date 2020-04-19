import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class DetailPage extends Component {
    /* sends user back a page */
    handleBack = () => {
        this.props.history.push('/')
    }
    /* sends user to next page */
    handleEdit = () => {
        this.props.history.push('/EditPage')
    }

    render() {
        console.log('selected movies is', this.props.selectedMovies);

        return (
            //  goes into selected movie reduer to display details of selected movie (NO MAP NEEDED//

            <div className="Details">
                <div>
                    <header>VIEW SELECTED MOVIE</header>
                    <>
                        <h1><img src={this.props.selectedMovies.poster} /> </h1>
                        <h1>{this.props.selectedMovies.name} </h1>
                        <h1>{this.props.selectedMovies.description} </h1>
                        <h1>
                            <button onClick={this.handleBack}> BACK</button>
                        </h1>
                        <h1>
                            <button onClick={this.handleEdit}>EDIT</button>

                        </h1>
                    </>

                </div>

            </div>
        );
    }
}

/* connects to the redux store so props is usable */
const putPropsOnReduxStore = (reduxStore) => ({
    selectedMovies: reduxStore.selectedMovies
});



export default withRouter(connect(putPropsOnReduxStore)(DetailPage));

