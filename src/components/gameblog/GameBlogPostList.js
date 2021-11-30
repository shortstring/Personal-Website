import classes from './GameBlogPostList.module.css';
import GameBlogPost from './GameBlogPost.js';
function GameBlogPostList(props) {
    return (<ul className={classes.list}>
        {props.GameBlogPost.map(blogpost => <GameBlogPost
            key={blogpost.id}
            id={blogpost.id}
            date={blogpost.date}
            image={blogpost.image}
            update={blogpost.update}
        />)}
    </ul>);
}

export default GameBlogPostList;