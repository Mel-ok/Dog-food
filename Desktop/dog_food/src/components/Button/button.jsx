import './style.css';

function Button({text, onClick}) {
    // const onClickButton = () => console.log('CLICK');
    return <button onClick={onClick} className='btn' /*onClick={onClickButton}*/>{text}</button>
}

export default Button;