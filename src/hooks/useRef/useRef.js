import './style.css'
import { useState, useRef, useCallback } from "react"

function TestUseRef() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
    const ulRef = useRef();
    const numbersRef = useRef;
    numbersRef.current = numbers;
    // const timerRef = useRef();

    const addNumber = () => {
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
    }

    const handleScroll = useCallback(() => {
        console.log('Был скролл', numbersRef.current)
    }, [])

    const removeScroll = () => {
        ulRef.current.removeEventListener('scroll', handleScroll)
    }

    const addScroll = () => {
        ulRef.current.addEventListener('scroll', handleScroll)
    }

    // const start = () => {
    //     timerRef.current = setInterval(addNumber, 1000)
    // }
    // const stop = () => {
    //     clearInterval(timerRef.current)
    // }

  return (
    <div>
        <ul ref={ulRef}>
            {numbers.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
        </ul>
        <button onClick={addNumber}>Добавить число</button>
        <br/>
        <br/>
        {/* Не следить */}
        <button onClick={addScroll}>Cледить</button>
        <br/>
        <br/>
        {/* Cледить */}
        <button onClick={removeScroll}>Не следить</button>
    </div>
  )
}
export default TestUseRef