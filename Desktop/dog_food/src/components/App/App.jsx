import './style.css';
import React from 'react';
import {useState, useEffect} from 'react';
// import { Spin } from 'antd';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import CardList from '../CardList/CardList';
import useDebounce from '../../hooks/useDebounce';
import api from '../../utils/api';
import isLike from '../../utils/utils';
import ProductPage from '../ProductPage/ProductPage';

function App() {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const debounceValue = useDebounce(searchQuery, 1000);

  const onChange = (text) => setSearchQuery(text);

  const handleRequest = () => {
    api
      .search(debounceValue)
      .then((data) => setCards(data));
  };

  const handleUpdateUser = (updateUser) => {
    api.updateUserInfo(updateUser).then(newUser => setUser(newUser));
  };

  useEffect(() => {
    handleRequest();
  }, [debounceValue]);

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
        <Search onChange={onChange} onButtonSearchClick={handleRequest} />

      </>
    </Header>
    {/* <div className='container'><CardList userId={user?._id} handleProductLike={handleProductLike} cards={cards}></CardList></div> */}
    <div className='container'><ProductPage></ProductPage></div>
    </>
  );
}

export default App;
