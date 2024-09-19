import { useState, useEffect } from "react"
import PostItem from "./PostItem"
function BlogOverview() {

  
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({state: false, msg: ""})

    async function fetchData() {

        setIsLoading(true)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)

        } catch (err) {
            console.log("err", err)
            setError({...error, state: true, msg: "Fetch failed"})
        

        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        
        fetchData()

    }, [])

    const PostList = posts.map((post: { title: string, id: number }) => {
        return <PostItem key={post.id} title={post.title} id={post.id} />
    })

    return (
        <div>
            {isLoading ? <h2>is loading...</h2> : PostList}
            {error && <div><h4 style={{ color: "red" }}>{error.msg}</h4></div>}

        </div>
    )
}

export default BlogOverview