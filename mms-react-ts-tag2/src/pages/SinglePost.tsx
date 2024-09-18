import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'

function SinglePost() {

    const [singlePost, setSinglePost] = useState({title: "", body:""})
    const {id} = useParams()

    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setSinglePost(data))
    })
  return (
    <div style={{padding: "10px", minHeight: 300, minWidth: "600px", width: "100%", display:"flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', border: "1px solid black", borderRadius: "10px", margin: "30px 0"   }}><h3>{singlePost.title}</h3>
    <p>{singlePost.body}</p></div>
  )
}

export default SinglePost