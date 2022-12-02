import { useState, useCallback } from "react"
import Buttons from "./Buttons"

function TestHookUseCallback() {
    const [count, setCount] = useState(0)
    const onPlus = useCallback(() => setCount((count) => count + 1), [])
    const onMinus = useCallback(() => setCount((count) => count - 1), [])
  return (
    <div style={{textAlign:'center'}}>
        {count}
        <Buttons onPlus={onPlus} onMinus={onMinus}/>
    </div>
  )
}

export default TestHookUseCallback