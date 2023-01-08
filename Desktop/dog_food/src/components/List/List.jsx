import './style.css';
// import {ReactComponent as Icon} from '../assets/image/logo.svg';

export default function List(props) {
  const data = ['first task', 'second task', 'third task', 'forth task'];
  const all = <li>IS DONE</li>;
  return (
    <>
      {props.work ? all : null}
      {/* <Icon /> */}
      <label htmlFor=''></label>
      <ul className='ul-list'>
        {data.map(el => (
          <li>{el}</li>
        ))}
      </ul>
    </>
  );
}