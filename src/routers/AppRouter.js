import { Routes, Route } from 'react-router-dom';

import { HomeScreen } from '../components/screens/HomeScreen';
import { ComicsScreen } from '../components/screens/ComicsScreen';
import { CharactersScreen } from '../components/screens/CharactersScreen';
import { FavouritesScreen } from '../components/screens/FavouritesScreen';
import { SearchScreen } from '../components/screens/SearchScreen';

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route index element={<HomeScreen />} />
                <Route path="characters" element={<CharactersScreen />} />
                <Route path="favourites" element={<FavouritesScreen />} />
                <Route path="comics/:id" element={<ComicsScreen />} />
                <Route path="search-screen" element={<SearchScreen />} />
            </Routes>
        </>
    )
}