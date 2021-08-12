import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './containers/Home';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import CreateNewProductPage from './containers/CreateNewProductPage';
import ViewPage from './containers/ViewPage';

function App() {



  return <>
    <Router>
      <Switch>
        
        <Route path={["/","/home"]} exact component={Home} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/products/new" exact component={CreateNewProductPage} />
        <Route path="/products/view/:id" exact component={ViewPage} />
        
      </Switch>
    </Router>      
  </>;
}

export default App;
