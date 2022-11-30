import { useState, useEffect } from "react"
import axios from "axios"

function TextUseEffect() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState()

    useEffect(() => {
        axios
         .get(`https://jsonplaceholder.typicode.com/todos/`)
         .then(res => {
            console.log(res)
            setPosts(res.data)
         })
         .catch(err => {
             console.log(err)
         })
    }, [])

    useEffect(() => {
        axios
         .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
         .then(res => {
            setPost(res.data)
         })
         .catch(err => {
             console.log(err)
         })
    }, [id])

    const onChange = (e) => {
      setId(e.target.value)
    }

  return (
    <>
      <input type='text' placeholder="Введите номер задачи" onChange={onChange}/>
      {
        !id ? 
        <div>
            <h1>Все задачи:</h1>
         {                   
            posts.map(post => (
             <div key={post.id} style={{display:'flex', alignItems:'center'}}>
               <span style={{color:'red', margin:'0 25px 0 0'}}>{post.id}</span>
               <p>{post.title}</p>
             </div>
           ))
         }
        </div> 
        : 
        <>
            <h1>Задача по вашему запросу:</h1>
            <div style={{display:'flex', alignItems:'center'}}>
                <span style={{color:'red', margin:'0 20px 0 0'}}>{post.id}</span>
                <p>{post.title}</p>
                </div>
        </>
      }
    </>
  )
}

export default TextUseEffect