import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
            <Switch>
                <Route exact path="/" component= {HomePage}/>
                <Route path="/portfolio"><p>This is my portfolio page!</p></Route>
                <Route path="/bio"><o>This is my Bio page!</o></Route>
                <Route path="/contact"><p>This is the contact me page!</p></Route>
            </Switch>
        </Router>
  );
} 

export default App;
 