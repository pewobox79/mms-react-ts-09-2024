import { blogData } from "../../utils/data/blogData";
import ArticleItem from "./ArticleItem";

function BlogOverview({styles}) {

    const ArticleList = blogData.map((article) => {

        return <ArticleItem 
        key={article.id} 
        id={article.id} 
        title={article.title}
        styles={styles} />
    })

    return <>
        <h1 className={`${styles.blogHeader} ${styles.underLine}`}>My Articles</h1>

        <div className={styles.listWrapper}>{ArticleList}</div>
    </>

}

export default BlogOverview