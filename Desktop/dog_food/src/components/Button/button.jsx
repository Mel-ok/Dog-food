import './style.css';

function Button({text}) {
    // const onClickButton = () => console.log('CLICK');
    return <button className='btn' /*onClick={onClickButton}*/>{text}</button>
}

export default Button;