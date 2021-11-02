// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import PortfolioPage from './pages/Portfolio'
function App() {
  return (
    <Layout>
    <h1>Welcome to my portfolio website</h1>
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
        </Switch>
    </Layout>
    );
}

export default App;