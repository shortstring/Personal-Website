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
                    Peaks n Valleys
                </div>
                <div >
                    <img className={classes.image} src='https://user-images.githubusercontent.com/77479441/139488065-d5454179-1a98-4652-bc50-6a083dbd6855.gif' alt='gif' />
                </div>
                <div className={classes.description}>
                    This program is a platformer game made with vanilla javascript, html, and css.
                </div>
                <a href='https://github.com/shortstring/peaks_n_valleys'>GitHub Repo</a>
                <div className={classes.actions}>
                    <button onClick={buttonHandler}>YEET</button>
                </div>
            </Card>
        </li>

    );
}

export default ProjectItem;