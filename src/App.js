import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './App.css';

import { AppRouter } from './routers/AppRouter';
import { HeaderUi } from './components/ui/HeaderUi';

export const App = () => {

    return (
        <>
            <HeaderUi />
            <AppRouter />
        </>
    )
}