import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./Login";
import Store from "./Store";
import SignUp from "./SignUp";
import Home from "./Home";
import CheckOut from "./CheckOut";

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sign-in" component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/store" component={Store} />
                <Route exact path="/check-out" component={CheckOut} />
            </Switch>
        </Router>
    )
}

export default Routing