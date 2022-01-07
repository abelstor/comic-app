import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { StateProvider } from './providers/StateProvider';
import reducer, { initialState } from './providers/reducer';

import { App } from './App';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById('root')
)