
import Card from "../components/ui/Card.js"
import classes from './GameBlog.module.css';
function GameBlogPage() {
//     <h1 className={classes.title}>Development blog</h1>
    //     <Card>
    //     <h2 className = {classes.date}>19 Nov 2021</h2>
    //     <ul className={classes.ul}>
    //         <li className={classes.li}>
    //                 <p>

    //             </p>
    //         </li>

    //         <li className={classes.li}>
    //                 <p>

    //             </p>
    //         </li>
    //     </ul>
    //     </Card>
    return (<section>
        <Card>
        <h2 className = {classes.date}>18 Nov 2021</h2>
        <ul className={classes.ul}>
            <li className={classes.li}>
                <p>
                    First interaction with backend performed today.
                </p>
            </li>

            <li className={classes.li}>
                <p>
                    When players click the login button they are now logged using their computers system ID . 
                </p>
            </li>
        </ul>
        </Card>

        <Card>
        <h2 className = {classes.date}>17 Nov 2021</h2>
        <ul className={classes.ul}>
            <li className={classes.li}>
                <p>
                    Fixed a bug that was loading two scenes at the same time when changing scenes.
                </p>
            </li>

            <li className={classes.li}>
                <p>
                    fixed some bugs with the player tracker not properly adding players to the player tracking list.
                </p>
            </li>
        </ul>
        </Card>

        <Card>
        <h2 className = {classes.date}>16 Nov 2021</h2>
        <ul className= {classes.ul}>
            <li className={classes.li}>
                <p>
                    Implemented dynamic solar targeting. This required me to start tracking players as they enter/leave systems. 
                </p>
            </li>
            <li className={classes.li}>
                <p>
                    Players are now added to a list and the solar then checks the list to find a player to target.
                </p>
            </li>
            <li className={classes.li}>
                <p>
                    Scene transitions are now handled by index rather than title.
                </p>
            </li>
        </ul>
        <iframe title ="gamegif" src="https://giphy.com/embed/ZqiLAVj3Bnwkue8YoE"></iframe>
        </Card>
        
        

    </section>);
}

export default GameBlogPage;