// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import './App.css';
import Profile from './components/profile/Profile';
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/profile" component={Profile}/>
    
      </Switch>
      </Router> 
    </div>
  );
}

export default App;
