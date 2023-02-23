import './style.css';
import User from '../User/User';
import Button from '../Button/button';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

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
            <Button onClick={onClick} text='Изменить пользователя'></Button>
            <Link to='/favourite'>
                <Button text='Избранное' />
            </Link>
        </header>
    );
}