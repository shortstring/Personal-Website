import ProjectItem from "./ProjectItem";
import classes from './ProjectList.module.css'
function ProjectList(props) {
    return (
        <ul className={classes.list}>
            {props.projects.map(project => <ProjectItem
                title={project.title}
                image = {project.image}
                description = {project.description}
                github={project.github}
            />)}
        </ul>
    );
}

export default ProjectList;