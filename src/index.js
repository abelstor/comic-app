import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { StateProvider } from './providers/StateProvider';
import reducer, { initialState } from './providers/reducer';

import { App } from './App';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById('root')
)