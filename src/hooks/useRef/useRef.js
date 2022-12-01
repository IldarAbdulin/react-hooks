import './style.css'
import { useState, useEffect, useRef } from "react"

function TestUseRef() {
    const [numbers, setNumbers] = useState([1, 2, 3]);
    // const ulRef = useRef();
    const timerRef = useRef();

    // const addNumber = () => {
    //     const lastNumber = numbers[numbers.length - 1];
    //     setNumbers([...numbers, lastNumber + 1])
    // }

    const addNumber = () => {
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
    }

    // const handleScroll = () => {
    //     console.log('Был скролл')
    // }

    // const removeScroll = () => {
    //     console.log(ulRef);
    //     ulRef.current.removeEventListener('scroll', handleScroll)
    // }

    // const addScroll = () => {
    //     ulRef.current.addEventListener('scroll', handleScroll)
    // }

    const start = () => {
        timerRef.current = setInterval(addNumber, 1000)
    }
    const stop = () => {
        clearInterval(timerRef.current)
    }

  return (
    <div>
        <ul>
            {numbers.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
        </ul>
        <button onClick={addNumber}>Добавить число</button>
        <br/>
        <br/>
        {/* Не следить */}
        <button onClick={start}>Старт</button>
        <br/>
        <br/>
        {/* Cледить */}
        <button onClick={stop}>Стоп</button>
    </div>
  )
}
export default TestUseRef