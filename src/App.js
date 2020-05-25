import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/main.scss';

//Components
import NavBar from './components/navbar/navbar';
import Footer from './components/navbar/footer';

//Pages
import Home from './pages/home';
import About from './pages/about';
import Music from './pages/music';
import Shop from './pages/shop';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/music' component={Music} />
            <Route path='shop' component={Shop} />
            <Route path='/about' component={About} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
