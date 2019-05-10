import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import AddCountry from './pages/AddCountry';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
// import logo from '../logo.png';
import Test from './pages/Test';
import Audio from './Audio';
import Feed from './pages/Feed';
import Search from './pages/Search';
import Comments from './pages/Comments';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }

    handleLogoutClick(e) {
        api.logout();
    }

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <div className="Title-bar">
                            {/* <img src={logo} className="App-logo" alt="logo" /> */}
                            <h1 className="App-title">ANKER</h1>
                        </div>
                    </header>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/countries" component={Countries} />
                        <Route path="/comments" component={Comments} />
                        <Route path="/add-country" component={AddCountry} />
                        <Route path="/test" component={Test} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/feed" component={Feed} />
                        <Route path="/search" component={Search} />
                        <Route path="/secret" component={Secret} />
                        <Route render={() => <h2>404</h2>} />
                    </Switch>
                </div>

                <footer className="nav">
                    <div className="lowNav">
                        <div class="App-Header" />
                        <NavLink to="/" exact>
                            Home
                        </NavLink>
                        <NavLink to="/countries">Countries</NavLink>
                        <NavLink to="/comments">Comments</NavLink>
                        <NavLink to="/add-country">Add country</NavLink>
                        <NavLink to="/test">Test</NavLink>
                        {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
                        {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
                        {api.isLoggedIn() && (
                            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                                Logout
                            </Link>
                        )}
                        <NavLink to="/feed">Feed</NavLink>
                        <NavLink to="/search">Search</NavLink>
                        <NavLink to="/secret">Secret</NavLink>
                    </div>
                </footer>
            </div>
        );
    }
}