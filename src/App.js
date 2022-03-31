import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Auth from './views/Auth/Auth';
import Todos from './views/Todos/Todos';
import { getUser } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Auth />
          </Route>
          <Route path='/todos'>
            <Todos />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
