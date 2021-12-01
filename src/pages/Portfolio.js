// import ProjectItem from '../components/projects/ProjectItem';
import ProjectList from '../components/projects/ProjectList';
let myProjects = [
    {
        title: 'Peaks N Valleys',
        image: 'https://user-images.githubusercontent.com/77479441/139488065-d5454179-1a98-4652-bc50-6a083dbd6855.gif',
        description: 'This program is a platformer game made with vanilla javascript, html, and css.',
        github: 'https://github.com/shortstring/peaks_n_valleys'
    },
    {
        title: 'The Movie Review Application',
        image: 'https://user-images.githubusercontent.com/77479441/139770884-067b4de5-7e2e-4469-b76f-22f2824be346.gif',
        description: 'The project is a movie review application made with TMDB api, Django and VueJs. https://www.themoviereviewapplication.com/',
        github: 'https://github.com/shortstring/The-Movie-Review-Application'
    },
    {
        title: 'Recipe Finder',
        image: 'https://user-images.githubusercontent.com/77479441/139489018-718b13dc-c681-45db-9907-0bced1c62347.gif',
        description: 'This is a recipe application that allows the user to search for and save recipes from the spoonacular API. Made with python and the python library TKinter.',
        github: 'https://github.com/shortstring/Recipe-Finder'
    }
];
function PortfolioPage() {

    return (<section>
        <ProjectList projects={myProjects}/>
    </section>);
}

export default PortfolioPage;