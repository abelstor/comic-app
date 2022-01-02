import { Routes, Route } from 'react-router-dom';

import { ComicApp } from '../ComicApp';
import { ComicScreen } from '../components/screen/ComicScreen';
import { MyFavourites } from '../components/favourites/MyFavourites';

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<ComicApp />} />
                <Route path="/comic" element={<ComicApp />} />
                <Route path="/screen" element={<ComicScreen />} />
                <Route path="/favourites" element={<MyFavourites />} />
            </Routes>
        </>
    )
}