
// import Card from "../components/ui/Card.js"
// import classes from './GameBlog.module.css';
import { useState, useEffect } from 'react';
import GameBlogPostList from '../components/gameblog/GameBlogPostList.js';
// import GameBlogPost from '../components/gameblog/GameBlogPost';

// const DUMMY_DATA = [
//     {
//     id: 'post1',
//         update: [
//             "Scene transitions are now handled by index rather than title.",
//             "Players are now added to a list and the solar then checks the list to find a player to target.",

//         ],
//     image:
//     'https://giphy.com/embed/ZqiLAVj3Bnwkue8YoE',
//     },
// ];


function GameBlogPage() {
    const [isLoading, setIsLoading] = useState(true); //returns an array with two elements, element 1 is current state snapshot and 2nd is a function for updating the state
    const [loadedGameBlogPosts, setLoadedGameBlogPosts] = useState([]);


    useEffect(() => {
        setIsLoading(true);
        //excuted only under certain circumstances, when the 2nd argument has changed
        // fetch('https://react-getting-started-b876f-default-rtdb.firebaseio.com/meetups.json'

        //fetch defaults to a get request, and returns a promise
        fetch('https://gamedevblog-fb536-default-rtdb.firebaseio.com/').then(response => {
            return response.json();//json also returns a promise as well so.. it has to be returned/resolved first
        }).then(data => {
            //we want to extract an array of meetups and then pass to meetup list
            const GameBlogPosts = [];
            for (const key in data) {
                console.log("data: " + key.date)
                const blogpost = {
                    id: key,
                    ...data[key]
                    // ... is called the spread operator (default js), copies all key value pairs
                };
                GameBlogPosts.push(blogpost);
            }
            console.log(GameBlogPosts)
            setIsLoading(false);
            setLoadedGameBlogPosts(GameBlogPosts);
        });
    }, []);
    console.log(loadedGameBlogPosts)

    //arg 1 is a function , 2nd arg is an array of external dependancies
    //this code will only run once when the page is rendered for the first time, because there are no external dependancies
    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    return (<GameBlogPostList GameBlogPost={loadedGameBlogPosts}
    />);
}

// function AllMeetupsPage() {
    


//     if (isLoading) {
//         return (
//             <section>
//                 <p>Loading...</p>
//             </section>
//         );
//     }

//     return <section>
//         <h1>All Meetups Page</h1>
//         <MeetupList />
//         </section>;
// }

export default GameBlogPage;