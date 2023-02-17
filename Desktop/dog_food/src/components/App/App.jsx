import './style.css';
import React from 'react';
import {useState, useEffect, useCallback} from 'react';
// import { Spin } from 'antd';
import {Routes, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import CardList from '../../pages/Catalog/CardList';
import api from '../../utils/api';
import isLike from '../../utils/utils';
import ProductPage from '../../pages/Product/ProductPage';
import Footer from '../Footer/footer';

function App() {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState({});

  const handleRequest = useCallback((newSearchQuery) => {
    api
      .search(newSearchQuery)
      .then((data) => setCards(data));
  }, []);

  const handleUpdateUser = useCallback((updateUser) => {
    api.updateUserInfo(updateUser).then((newUser) => setUser(newUser));
  }, []);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getAllProducts()]).then(([userData, productsData]) => {
      setUser(userData);
      setCards(productsData.products)
    });
  }, []);

  const handleProductLike = (productId, productLikes) => {
    const isLiked = isLike(productLikes, user._id);
    api.changeLikeStatus(productId, isLiked).then((updateProduct) => {
      const updateCards = cards.map((card) => (card._id === updateProduct._id ? updateProduct : card));
      setCards(updateCards);
    });
  };

  return (
  <>
    <Header user={user} handleUpdateUser={handleUpdateUser}>
      <>
        <Logo />
        <Search onSearch={handleRequest} />

      </>
    </Header>
    <Routes>
      <Route path='/' element={<CardList userId={user?._id} handleProductLike={handleProductLike} cards={cards}></CardList>}></Route>
      <Route path='/product/:productId' element={<ProductPage user={user}></ProductPage>}></Route>
    </Routes>
    {/* <div className='container'><CardList userId={user?._id} handleProductLike={handleProductLike} cards={cards}></CardList></div> */}
    {/* <div className='container'><ProductPage user={user}></ProductPage></div> */}
    <Footer></Footer>
  </>
  );
}

export default App;
