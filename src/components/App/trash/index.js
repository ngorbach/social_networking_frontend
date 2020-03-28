import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles'
import { GlobalStyle} from './styles'
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>,

    document.getElementById('root')
);