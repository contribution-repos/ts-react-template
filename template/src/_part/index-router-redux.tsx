import * as ReactDOM from 'react-dom';
import './global-css/main.scss';
import { Provider } from 'react-redux';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from '@/model/store';
import Demo from '@/components/demo';
import App from './app';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="demo" element={<Demo />} />
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
