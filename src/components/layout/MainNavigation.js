import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';

function MainNavigation() {
    return (<header className={classes.header}>
        <div className ={classes.outterdiv}>
            <nav className ={classes.nav}>
                <ul className={classes.navlist}>
                    <li>
                        <Link to ="/" className={classes.navitem}>About Me</Link>
                    </li>
                    <li>
                        <Link to ="/my-projects" className={classes.navitem}>My Projects</Link>
                    </li>
                    <li>
                        <Link to ="/contact-me" className={classes.navitem}>Contact Me</Link>
                    </li>
                    <li>
                        <Link to ="/gameblog" className={classes.navitem}>Game Dev Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>);
}

export default MainNavigation;