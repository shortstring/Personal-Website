import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';

function MainNavigation() {
    return (<header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <Link to ="/">About Me</Link>
                </li>
                <li>
                    <Link to ="my-projects">My Projects</Link>
                </li>
                <li>
                    <Link to ="contact-me">Contact Me</Link>
                </li>
            </ul>
        </nav>
    </header>);
}

export default MainNavigation;