// import { Routes, Route } from 'react-router-dom';
// import { HeaderBox } from './HeaderBox/HeaderBox';
// import { Home } from '../pages/Home';
// import { Movies } from '../pages/Movies';
// import { MovieDetailsPage } from '../pages/MovieDetailsPage';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

// // import { lazy } from 'react';

// // const Home = lazy(() => import('../pages/Home'));
// // const Movies = lazy(() => import('../pages/Movies'));
// // const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
// // const Cast = lazy(() => import('./Cast/Cast'));
// // const Reviews = lazy(() => import('./Reviews/Reviews'));


// export const App = () => {
//   return (
//      <Routes>
//       <Route path="/" element={<HeaderBox />}>
//         <Route index element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
//           <Route path="/movies/:movieId/cast" element={<Cast />} />
//           <Route path="/movies/:movieId/reviews" element={<Reviews />} />
//         </Route>
//         <Route path="*" element={<Home />} />
//       </Route>
//     </Routes>
//   );
// };

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HeaderBox = lazy(() => import('./HeaderBox/HeaderBox'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HeaderBox />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

