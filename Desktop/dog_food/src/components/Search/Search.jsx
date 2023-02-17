import {ReactComponent as Icon} from '../../assets/image/ic-search.svg';
import {ReactComponent as IconClose} from '../../assets/image/ic-close-input.svg';
import './style.css';
import { useState } from 'react';

function Search({onSearch}) {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(text);
    };

    return (
        <form onSubmit={onSubmit} className='search'>
            <input onChange={(e) => {
                setText(e.target.value);
            }}
            className='search__input'
            placeholder="Search" 
            value={text}
            />
            <Icon className='search__icon' onClick={() => onSearch(text)}  />
            <IconClose className='search__iconCross' onClick={() => {setText('')}} />
        </form>
    );
}

export default Search;