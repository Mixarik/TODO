import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import App from './components/App';
import { store } from './features';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
