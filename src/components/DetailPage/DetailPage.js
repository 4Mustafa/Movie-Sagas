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
                <div>
                    <h1>VIEW MOVIE</h1>
                    <>
                        <img src={this.props.selectedMovies.poster} />
                        {this.props.selectedMovies.description}
                        <li>
                            <button onClick={this.handleBack}>GO BACK</button>
                        </li>

                        <li>
                            <button onClick={this.handleEdit}>EDIT</button>

                        </li>
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

