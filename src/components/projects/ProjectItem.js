import classes from "./ProjectItem.module.css"
import Card from "../ui/Card.js"
function ProjectItem(props) {
    function buttonHandler() {
        console.log('CLICKED!!!!!!')
    }

    
    
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.title}>
                    {props.title}
                </div>
                <div >
                    <img className={classes.image} src={ props.image} alt='gif' />
                </div>
                <div className={classes.description}>
                    {props.description}
                </div>
                <a href= {props.github}>GitHub Repo</a>
                <div className={classes.actions}>
                    <button onClick={buttonHandler}>YEET</button>
                </div>
            </Card>
        </li>

    );
}

export default ProjectItem;