import { createElement } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';
import initialState from '../config.json';
import storeProvider from './hoc/storeProvider';
import 'mdi/css/materialdesignicons.min.css';
import './style/index.scss';

const store = createStore(reducers, initialState);
const provideStore = storeProvider(store);
const rootElement = createElement(provideStore(App));

render(rootElement, document.getElementById('app'));
