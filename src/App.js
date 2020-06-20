import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import How from './components/pages/How';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';

function App() {
  return (
    <Router>
      <Header />
        <div className='body'>
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/how' exact component={How} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/privacy' exact component={Privacy} />
            <Route path='/terms' exact component={Terms} />
          </Switch>            
        </div>
      <Footer />
    </Router>
  );
}

export default App;