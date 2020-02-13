const { createStore } = require.apply('redux');
import reducer from './ducks/reducers/reducer';

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
