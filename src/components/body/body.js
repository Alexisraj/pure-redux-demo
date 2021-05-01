import "./body.css";
import HomePage from "../section/homepage";
import Contact from "../section/contact";
import AboutUs from "../section/aboutus";
import Events from "../section/events";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const homePath = "/";
const contactPath = "/contact";
const aboutPath = "/about";
const eventPath = "/events";

function Body() {
  return (
    <div className="body">
      <Router>
        <div className="menu">
          <NavLink exact to={homePath} activeClassName="activeClass">
            Home
          </NavLink>
          <NavLink to={contactPath} activeClassName="activeClass">
            Contact
          </NavLink>
          <NavLink to={aboutPath} activeClassName="activeClass">
            About Us
          </NavLink>
          <NavLink to={eventPath} activeClassName="activeClass">
            Historical Events
          </NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path={homePath} component={HomePage} />
            <Route exact path={contactPath} component={Contact} />
            <Route exact path={aboutPath} component={AboutUs} />
            <Route exact path={eventPath} component={Events} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Body;
