import * as ReactDOM from 'react-dom';
import './global-css/main.scss';
import { Provider } from 'react-redux';
import { store } from './model/store';
import App from './app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
