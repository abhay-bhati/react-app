import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DayView from './pages/DayView';
import MonthView from './pages/MonthView';
import MainNavigation from './layout/MainNavigation';
import { useContext } from 'react';
import { AuthContext } from './store/authcontext';


function App() {

  const AuthCtx = useContext(AuthContext);
  console.log(AuthCtx.login);

  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
            <HomePage />
        </Route>
        <Route path='/dayview'>
            {AuthCtx.login && <DayView />}
            {!AuthCtx.login && <Redirect to='/' />}
        </Route>
        <Route path='/monthview'>
            {AuthCtx.login && <MonthView />}
            {!AuthCtx.login && <Redirect to='/' />}
        </Route>
        <Route path='*'>
            <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
