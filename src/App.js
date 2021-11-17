// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import PortfolioPage from './pages/Portfolio';
import GameBlogPage from './pages/GameBlog';
function App() {
  return (
    <Layout>
        <Switch>
          <Route path='/Personal-Website/' exact>
            <AboutPage/>
          </Route>
          <Route path='/Personal-Website/my-projects'>
            <PortfolioPage/>  
          </Route>
          <Route path='/Personal-Website/contact-me'>
            <ContactPage/>  
          </Route>
          <Route path='/Personal-Website/gameblog'>
            <GameBlogPage/> 
          </Route>

        </Switch>
    </Layout>
    );
}

export default App;