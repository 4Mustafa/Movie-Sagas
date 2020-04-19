import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovieSaga);
    yield takeEvery('PUT_MOVIES', putMoviesSaga);
}

function* getMovieSaga(action) {
    console.log('in getMovieSaga', action.payload);
    try {
        const response = yield axios.get('/api/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data })
    }
    catch (error) {
        console.log('Error with Search GET', error);
    }

}


function* putMoviesSaga(action) {
    console.log('in puttMoviesSaga', action.payload);
    try {
        yield axios.put('/api/movies', action.payload);
        yield put({ type: 'GET_MOVIES' });


    }
    catch (error) {
        console.log('Error with Favorite PUT', error);
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
const selectedMovies = (state = [], action) => {
    switch (action.type) {
        case 'SElECT_MOVIES':
            console.log('in select movie', action.payload);

            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovies,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
