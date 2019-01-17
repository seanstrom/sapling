import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App, reducer } from './app';

const main = () => {
    const store = createStore(reducer);
    const element = document.getElementById('root');

    const app = (
        <Provider store={store}>
            <App />
        </Provider>
    );

    render(app, element);
};

main();