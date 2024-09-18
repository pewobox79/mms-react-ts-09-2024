import { Link } from "react-router-dom"

function PostItem({ title, id }: { title: string, id: number }) {
    return (
        <Link to={`/blog/${id}`}><div style={{
            border: "1px solid lightgray",
            borderRadius: "10px",
            padding: "10px",
            margin: "3px"
        }}>
            <h3>{title}</h3>
        </div>
        </Link>
    )
}

export default PostItem