import React from 'react';
import './css/style.min.css';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Catalogue from './pages/Catalogue';
import SingleItem from './pages/SingleItem';
import Checkout from './pages/Checkout';
import SearchPage from './pages/SearchPage';
import Brands from './pages/Future pages/Brands';
import Contacts from './pages/Future pages/Contacts';
import Delivery from './pages/Future pages/Delivery';
import HowToOrder from './pages/Future pages/HowToOrder';
import Payment from './pages/Future pages/Payment';
import Return from './pages/Future pages/Return';
import Reviews from './pages/Future pages/Reviews';
import Sales from './pages/Future pages/Sales';
import Warranty from './pages/Future pages/Warranty';
import NotFound from './pages/notFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalogue/:category/:subcategory" element={<Catalogue />} />
        <Route path="/catalogue/:category" element={<Catalogue />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/item/:id" element={<SingleItem />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/how_to_order" element={<HowToOrder />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/return" element={<Return />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
