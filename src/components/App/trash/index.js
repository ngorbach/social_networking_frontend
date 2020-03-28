// React modules
import React from 'react';
import ReactDOM from 'react-dom';

// React-Redux modules
import { Provider } from 'react-redux';
import store from './store';

// Styled components
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles'

// App module
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>,

    document.getElementById('root')
);