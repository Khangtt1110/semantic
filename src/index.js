import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/GlobalStyles';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </Provider>,
);
