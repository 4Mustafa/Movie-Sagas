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
        console.log('selected movies is', this.props.selectedMovies);

        return (
            //maps through data to display details of selected movie 
            <div className="Details">
                <p>Details</p>
                <div>
                    <h1>VIEW MOVIE</h1>
                    <>
                        <h1><img src={this.props.selectedMovies.poster} /> </h1>
                        <h1>{this.props.selectedMovies.name} </h1>
                        <h1>{this.props.selectedMovies.description} </h1>
                        <h1>
                            <button onClick={this.handleBack}>GO BACK</button>
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


const putPropsOnReduxStore = (reduxStore) => ({
    selectedMovies: reduxStore.selectedMovies
});



export default withRouter(connect(putPropsOnReduxStore)(DetailPage));

