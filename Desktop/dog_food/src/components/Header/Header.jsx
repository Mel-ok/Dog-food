import './style.css';
import User from '../User/User';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as IconFav} from '../../assets/image/save.svg';

export default function Header({children, handleUpdateUser}) {
    const updateUser = {name: 'Новое имя', about: 'Новый about'};
    const {user} = useContext(UserContext);

    const onClick =() => {
        handleUpdateUser(updateUser);
    };

    return (
        <header className="header">
            {children}
            <User user={user} />     
            <Link to='/favourite'>
                <IconFav className='fav'/>
            </Link>
        </header>
    ); 
}