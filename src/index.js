import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Wrapper } from './components/Wrapper.styled';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Wrapper>
      <App />
    </Wrapper>
  </Provider>
  // </React.StrictMode>
);
