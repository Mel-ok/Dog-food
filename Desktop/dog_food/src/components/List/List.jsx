import './style.css';

export default function List(props) {
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