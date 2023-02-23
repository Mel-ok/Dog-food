import './style.css';
import React from 'react';
import {useState, useEffect, useCallback} from 'react';
// import { Spin } from 'antd';
import {Routes, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import CardList from '../CardList/CardList';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import api from '../../utils/api';
import isLike from '../../utils/utils';
import ProductPage from '../../pages/Product/ProductPage';
import Footer from '../Footer/footer';
import { UserContext } from '../../context/userContext';
import FavouritePage from '../../pages/Favourite/FavouritePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favouriteCards, setFavouriteCards] = useState([]);
  const [user, setUser] = useState({});

  const handleRequest = useCallback((newSearchQuery) => {
    setSearchQuery(newSearchQuery);
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
      setCards(productsData.products);
      const favourites = productsData.products.filter(product => isLike(product.likes, userData._id))
      setFavouriteCards(favourites);
    });
  }, []);

  const handleProductLike = useCallback((productId, productLikes) => {
    const isLiked = isLike(productLikes, user._id);
    return api.changeLikeStatus(productId, isLiked).then((updateProduct) => {
      const updateCards = cards.map((card) => (card._id === updateProduct._id ? updateProduct : card));
      setCards(updateCards);

      if(isLiked) {
        setFavouriteCards(prevState => prevState.filter((card) => card._id !== updateProduct._id));
      } else {
        setFavouriteCards(prevState => [...prevState, updateProduct]);
      }

      return updateProduct;
    });
  }, [cards, user._id]);

  return (
  <UserContext.Provider value={{user, handleProductLike}}>
    <Header user={user} handleUpdateUser={handleUpdateUser}>
      <>
        <Logo />
        <Routes>
          <Route path='/' element={<Search onSearch={handleRequest} />}></Route>
          <Route path='/catalog' element={<Search onSearch={handleRequest} />}></Route>
        </Routes>
      </>
    </Header>
    <Routes>
      <Route path='/' element={<CatalogPage searchQuery={searchQuery} cards={cards}></CatalogPage>}></Route>
      <Route path='/catalog' element={<CatalogPage cards={cards}></CatalogPage>}></Route>
      <Route path='/product/:productId' element={<ProductPage></ProductPage>}></Route>
      <Route path='/favourite' element={<FavouritePage favouriteCards={favouriteCards}></FavouritePage>}></Route>
      <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
    {/* <div className='container'><CardList userId={user?._id} handleProductLike={handleProductLike} cards={cards}></CardList></div> */}
    {/* <div className='container'><ProductPage user={user}></ProductPage></div> */}
    <Footer></Footer>
  </UserContext.Provider>
  );
}

export default App;
