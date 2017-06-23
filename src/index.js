import 'babel-polyfill';
import 'font-awesome/css/font-awesome.min.css';
import './styles/app.less';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './modules/App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CookiesProvider>,
    document.getElementById('root'),
);
registerServiceWorker();
