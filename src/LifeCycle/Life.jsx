import { useState, useEffect, useRef, memo } from 'react';

const Life = memo(() => {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef();
  const obj = {
    title: 'Текущее время',
    date: new Date(),
  };

  useEffect(() => {
    console.log('Component did uptade');
  }, [counter]);

  const AddInterval = () => {
    timerRef.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  };

  const removeInterval = () => {
    clearInterval(timerRef.current);
    setCounter((counter) => (counter = 0));
  };

  return (
    <div>
      <p>{obj.title}</p>
      <p>{counter}</p>
      <p>{obj.date.toLocaleTimeString()}</p>
      <button onClick={AddInterval}>Cледить</button>
      <button onClick={removeInterval}>Не следить</button>
    </div>
  );
});
export default Life;
