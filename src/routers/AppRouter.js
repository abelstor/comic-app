import { Routes, Route } from 'react-router-dom';

import { HomeScreen } from '../components/screens/HomeScreen';
// import { HeaderUi } from '../components/ui/HeaderUi';
import { ListComicScreen } from '../components/screens/ListComicScreen';
import { CharactersScreen } from '../components/screens/CharactersScreen';
import { FavouritesScreen } from '../components/screens/FavouritesScreen';
import { SearchScreen } from '../components/screens/SearchScreen';

export const AppRouter = () => {

    return (
        <>
            <Routes>
                {/* <Route path="/header" element={<HeaderUi />} /> */}
                <Route index element={<HomeScreen />} />
                <Route path="characters" element={<CharactersScreen />} />
                <Route path="favourites" element={<FavouritesScreen />} />
                <Route path="list-comic/:id" element={<ListComicScreen />} />
                <Route path="search-screen" element={<SearchScreen />} />
            </Routes>
        </>
    )
}