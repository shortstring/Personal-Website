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
          <Route path='/' exact>
            <AboutPage/>
          </Route>
          <Route path='/my-projects'>
            <PortfolioPage/>  
          </Route>
          <Route path='/contact-me'>
            <ContactPage/>  
          </Route>
          <Route path='/gameblog'>
            <GameBlogPage/> 
          </Route>
        </Switch>
    </Layout>
    );
}

export default App;