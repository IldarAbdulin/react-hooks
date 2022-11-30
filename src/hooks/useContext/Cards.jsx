import Card from "./Card"
import { useContext} from "react";
import Context from "./Context";

function Cards() {
    const value = useContext(Context)
  return (
    <div>
        <Card counter={1} count={value.count}/>
        <br/>
        <Card counter={5} count={value.count}/>
        <br/>
        <Card counter={10} count={value.count}/>
        <br/>
        <Card counter={50} count={value.count}/>
    </div>
  )
}
export default Cards