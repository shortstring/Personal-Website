import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';

function MainNavigation() {
    return (<header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <Link to ="/Personal-Website/">About Me</Link>
                </li>
                <li>
                    <Link to ="/Personal-Website/my-projects">My Projects</Link>
                </li>
                <li>
                    <Link to ="/Personal-Website/contact-me">Contact Me</Link>
                </li>
            </ul>
        </nav>
    </header>);
}

export default MainNavigation;