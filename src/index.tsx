import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import {store} from './store';
import {fetchQuestions, fetchTasks} from './store/api-actions';
import './index.css';

store.dispatch(fetchTasks());
store.dispatch(fetchQuestions());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
