import { Routes, Route } from 'react-router-dom';

import { ComicApp } from '../ComicApp';
import { ComicScreen } from '../components/screen/ComicScreen';
import { MyFavourites } from '../components/favourites/MyFavourites';
import { ComicList } from '../components/comicList/ComicList';
import { Header } from '../components/ui/Header';

export const AppRouter = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ComicApp />} />
                <Route path="/comic" element={<ComicApp />} />
                <Route path="/screen" element={<ComicScreen />} />
                <Route path="/comic-list/:id" element={<ComicList />} />
                <Route path="/favourites" element={<MyFavourites />} />
            </Routes>
        </>
    )
}