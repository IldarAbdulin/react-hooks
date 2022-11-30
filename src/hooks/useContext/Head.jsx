import { useContext} from "react";
import Context from "./Context";

function Head() {
    const value = useContext(Context)
  return (
    <div>
         Книг в корзине: {value.counter}
    </div>
  )
}
export default Head