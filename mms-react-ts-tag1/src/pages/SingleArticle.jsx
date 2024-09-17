import { useParams } from "react-router-dom"
import { blogData } from "../utils/data/blogData";
import styles from '../styles/Blog.module.css'

function SingleArticle() {

    const params = useParams();

    const singleArticle = blogData.find((item) => item.id === params.id)


    return (
        <div className={styles.singleArticleWrapper}>
            <h1>{singleArticle.title}</h1>
            <p>{singleArticle.body}</p>
        </div>
    )
}

export default SingleArticle