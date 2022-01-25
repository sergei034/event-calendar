import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter/AppRouter';
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import { store } from './store/storeConfig';
import { getCurrentYear } from './utils/getCurrentYear';
import { AUTH_ACTION_CREATORS } from './store/reducers/authReducer/authActions';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer currentYear={getCurrentYear()} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
