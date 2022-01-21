import { Routes, Route } from 'react-router-dom';

import { HeaderUi } from '../components/ui/HeaderUi';
import { HomeScreen } from '../components/screens/HomeScreen';
import { SearchScreen } from '../components/screens/SearchScreen';
import { ResultSearch } from '../components/screens/ResultSearch';
import { ComicsScreen } from '../components/screens/ComicsScreen';
import { CharactersScreen } from '../components/screens/CharactersScreen';
import { FavouritesScreen } from '../components/screens/FavouritesScreen';
import { Footer } from '../components/ui/Footer';

export const AppRouter = () => {

    return (
        <>
            <HeaderUi />
            <Routes>
                <Route index element={<HomeScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="result" element={<ResultSearch />} />
                <Route path="comics/:id" element={<ComicsScreen />} />
                <Route path="characters" element={<CharactersScreen />} />
                <Route path="favourites" element={<FavouritesScreen />} />
            </Routes>
            <Footer />
        </>
    )
}