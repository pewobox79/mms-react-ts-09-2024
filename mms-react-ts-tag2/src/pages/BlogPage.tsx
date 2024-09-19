import BlogOverview from "../components/BlogOverview"
import NewPostForm from "../components/NewPostForm"

function BlogPage() {


    return (
        <>
            <h2>My Posts</h2>
            <NewPostForm />
            <BlogOverview />

        </>
    )
}

export default BlogPage