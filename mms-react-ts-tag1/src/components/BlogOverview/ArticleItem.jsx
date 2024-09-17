import { Link } from 'react-router-dom'

function ArticleItem({ title, id, styles }) {

    return <div className={styles.listItemWrapper}>
        <Link to={`/blog/${id}`}>
            {title}
        </Link>
    </div>
}

export default ArticleItem