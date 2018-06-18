import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import { init } from '@rematch/core';

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './apiUrlInterceptor';
import sortingGame from './sortingGame/sortingGame';

const loggerMiddleware = createLogger();

export const store = init({
  models: {
    sortingGame,
  },
  redux: {
    middlewares: [loggerMiddleware],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
