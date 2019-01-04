import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import index from './components/layout';
import{ Provider} from './context';
import Lyrics  from './components/tracks/Lyrics';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router basename={Process.env.PUBLIC_URL}>
      <React.Fragment>
       <Navbar/>
       <div className="container">
       <Switch>
         <Route exact path ="/" component={index} />
         <Route  exact path ="/lyrics/track/:id" component={Lyrics}/>
       </Switch>
       </div>
      </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
