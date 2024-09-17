import BlogOverview from "../components/BlogOverview"
import styles from '../styles/Blog.module.css'

function BlogPage() {

    console.log("module css", styles)
    return <BlogOverview styles={styles}/>
}

export default BlogPage