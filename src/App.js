import "./App.css";
import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { About } from "./components/pages/about";

class App extends Component {

  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  // For making req to apis
  async componentDidMount() {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users:res.data,loading:false});
  }

  // Search Github Users
  searchUsers = async (text) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users:res.data.items,loading:false});
  }
  
  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false});

  // get details about github user
  getUser = async username => {
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user: res.data,loading:false});
  }

  // get users repos
  getUserRepos = async username => {
    this.setState({loading: true});
    console.log("repo lalao");
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log("hi" + res.data);
    this.setState({repos: res.data,loading:false});
  }

  // set alert 
  setAlert = (msg,type) => {
    this.setState({alert: {msg: msg, type: type}});

    setTimeout(()=> this.setState({alert:null}),5000);
  }

  render() {
    const {users, repos,user,loading} = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={props =>(
                <Fragment>
                  <Search searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClear={users.length > 0 ? true: false } 
                    setAlert={this.setAlert} />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props =>(
                 <User {...props} getUser={this.getUser} user={user} getUserRepos={this.getUserRepos} repos={repos} loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
