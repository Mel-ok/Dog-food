import {ReactComponent as Icon} from '../../assets/image/ic-search.svg';
import './style.css';

function Search({onChange, onButtonSearchClick, value}) {
    return (
        <div className='search'>
            <input onChange={(e) => onChange(e.target.value)} className='search__input' placeholder="Search" />
            <Icon className='search__icon' onClick={onButtonSearchClick}  />
        </div>
    );
}

export default Search;