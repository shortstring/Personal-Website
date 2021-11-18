function GameBlogPage() {

    return (<section>
        <h1>Development blog</h1>
        
        <h2>17 Nov 2021</h2>
        •	fixed some bugs with the player tracker not properly adding players to the player tracking list.

        <h2>16 Nov 2021</h2>
        •	Implemented dynamic solar targeting. This required me to start tracking players as they enter/leave systems. 
        •	Players are now added to a list and the solar then checks the list to find a player to target.
        •	Scene transitions are now handled by index rather than title.
        
        
        <iframe title ="gamegif" src="https://giphy.com/embed/ZqiLAVj3Bnwkue8YoE"></iframe>

    </section>);
}

export default GameBlogPage;