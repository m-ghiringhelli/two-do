import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Auth from './views/Auth/Auth';
import Todos from './views/Todos/Todos';
import { getUser } from './services/users';
import Header from './components/Header/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <BrowserRouter>
      <div className="App">
        <Header {...{ currentUser, setCurrentUser }} />
        <Switch>
          <Route exact path='/'>
            <Auth {...{ setCurrentUser, currentUser }} />
          </Route>
          <Route path='/todos'>
            <Todos currentUser={currentUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
