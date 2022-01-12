import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter/AppRouter';
import { store } from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
