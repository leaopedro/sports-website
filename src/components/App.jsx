import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Home from './Home';
import './../style/main.less';

const App = ({ store }) => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
