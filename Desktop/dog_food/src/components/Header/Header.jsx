import './style.css';
import User from '../User/User';
// import Button from '../Button/button';

export default function Header({children, user, handleUpdateUser}) {
    const updateUser = {name: 'Новое имя', about: 'Новый about'};
    
    // const onClick =() => {
    //     console.log('click');
    //     handleUpdateUser(updateUser);
    // };

    return <header className="header">
        {children}
        <User user={user} />
        {/* <Button onClick={onClick} text='Изменить' /> */}
    </header>;
}