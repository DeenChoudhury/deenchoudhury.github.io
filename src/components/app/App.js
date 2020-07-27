import React from 'react';
import './App.css';
import Home from '../Home';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


class App extends React.Component{
   render() {
      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}/>
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
}
export default App;