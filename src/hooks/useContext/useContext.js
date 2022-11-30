import { useState } from "react"
import Context from "./Context"
import Head from "./Head"
import Cards from "./Cards"

function TestContext() {
    const [counter, setCounter] = useState(0)
    const count = (n) => setCounter(counter + n)

    const value = {
        counter,
        count 
    }
  return (
    <Context.Provider value={value}>
      <Head />
      <br/>
      <Cards />
    </Context.Provider>
  )
}
export default TestContext