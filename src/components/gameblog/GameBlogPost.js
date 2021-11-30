import classes from "./GameBlogPost.module.css"
import Card from "../ui/Card.js"
function GameBlogPost(props)
{
    return (
        <Card>
            <li>
                <div className={classes.container}>
                    <div className = {classes.post}>
                        <h2 className={classes.date}>
                            {props.date}
                        </h2>
                        <ul className={classes.ul}>
                            <li>
                            {props.update.update1}
                            </li>
                            <li>
                            {props.update.update2}
                            </li>
                            <li>
                            {props.update.update3}
                            </li>
                        </ul>
                        <iframe title={ props.id}src={ props.image}></iframe>
                    </div>
                </div>
            </li>
        </Card>
        );
}

//  {
//                             props.update.map(update => (
//                                 <li>
//                                     {update}
//                             </li>
//                         ))}

export default GameBlogPost;