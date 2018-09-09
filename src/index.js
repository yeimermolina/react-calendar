import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {createStore, combineReducers } from 'redux'
import './index.scss'
import App from './App'
import calendarReducer from './store/reducers/calendar'
import registerServiceWorker from './registerServiceWorker'

const rootReducer = combineReducers({
  calendar: calendarReducer
})

const store = createStore(
  rootReducer
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
