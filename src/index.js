
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from './routers/AppRouter';

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById('root')
)