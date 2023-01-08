import './App.css';
import {useState, useEffect} from 'react';
import cardsFromBack from './data.json';
// import Button from './components/Button/button';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';

function App() {
  const [cards, setCards] = useState(cardsFromBack);
  const [searchQuery, setSearchQuery] = useState('');

  const onChange = (text) => setSearchQuery(text);
  const onButtonSearchClick = () => {
    setCards((cards) => cardsFromBack.filter((card) => card.name.toLowerCase().startsWith(searchQuery)));
  };

useEffect(() => {
  onButtonSearchClick();
}, [searchQuery]);

  return (
    <>
    <Header>
      <>
        <Logo />
        <Search onChange={onChange} onButtonSearchClick={onButtonSearchClick} />
      </>
    </Header>
    <CardList cards={cards}></CardList>
    </>
  );
}

export default App;
