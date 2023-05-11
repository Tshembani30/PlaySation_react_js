// import { lazy, Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { Routes, Route, useParams } from 'react-router-dom';
// import Products from '../Pages/Games'
// function Products() {
//   // Get the userId param from the URL.
//   let { gamesId } = useParams();
//   // ...
// }
// const Home = lazy(() => import('./Pages/Home'));
// const About = lazy(() => import('./Pages/About'));
// const Games = lazy(() => import('./Pages/Games'));
// const Products = lazy(() => import('./Pages/Products'));

// const App = () => {
//  return (
//     <>
//        <NavBar />
//        <Suspense fallback={<div className="container">Loading...</div>}>
//           <Routes>
//              <Route path="/" element={<Home />} />
//              <Route path="/about" element={<About />} />
//              <Route path="/games" element={<Games />} />
//              <Route path="/products" element={<Products />} />
             
//           </Routes>
//        </Suspense>
//     </>
//  );
// };