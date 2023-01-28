import './App.css';
import {useState, useEffect} from 'react';
import Button from '../Button/button';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import CardList from '../CardList/CardList';
import User from '../User/User';
import useDebounce from '../../hooks/useDebounce';
import api from '../../utils/api';

function App() {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const debounceValue = useDebounce(searchQuery, 1000);

  const onChange = (text) => setSearchQuery(text);

  const handleRequest = () => {
    api.search(debounceValue).then((data) => setCards(data));
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

  return (
    <>
    <Header user={user} handleUpdateUser={handleUpdateUser}>
      <>
        <Logo />
        <Search onChange={onChange} onButtonSearchClick={handleRequest} />

      </>
    </Header>
    <div className='container'>
      <CardList cards={cards}></CardList>
    </div>
    </>
  );
}

export default App;
