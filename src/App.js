import './App.css';
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import {UseAuthListener} from './hooks'

function App() {
  const {user} = UseAuthListener()
  console.log(user)
  
  return (
    <Router>
      <Switch>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user} path={ROUTES.SIGN_IN}>
          <Signin />      
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse /> 
        </ProtectedRoute>
        <IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user} path={ROUTES.HOME} exact>
          <Home /> 
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
