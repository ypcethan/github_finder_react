import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], isLoading: true, alert: null }
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);

  }

  async searchUsers(text) {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRECT}`);
    console.log(res['data']);

    this.setState(
      { users: res.data.items, isLoading: false }
    )
  }

  clearUsers() {
    this.setState(
      { users: [], isLoading: false }
    )
  }
  async componentDidMount() {



    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRECT}`);

    // Setstate call only after the await function return.
    this.setState(
      { users: res['data'], isLoading: false }
    )
  }

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    })
    // 3 secs letaer, the alter goes away. 
    setTimeout(
      () => this.setState({ alert: null }),
      3000)
  }




  render() {

    return (

      <Router>


        <div className="App" >
          <Navbar />

          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert} />
                  <Users users={this.state.users} isLoading={this.state.isLoading} />
                </Fragment>
              )} />

              <Route exact path='/about' component={About} />



            </Switch>

          </div>

        </div>
      </Router>
    );
  }
}

export default App;
