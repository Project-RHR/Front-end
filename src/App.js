import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import About from './components/About'
import Accessibility from './components/Accessibility'
import Contact from './components/Contact'
import Cookies from './components/Cookies'
import Documentation from './components/Documentation'
import Privacy from './components/Privacy'
import Team from './components/Team'
import TOS from './components/TOS'
import FourOhFour from './components/404'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/about" component={About} />
            <Route exact path="/a11y" component={Accessibility} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cookies" component={Cookies} />
            <Route exact path="/documentation" component={Documentation} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/tos" component={TOS} />
            <Route path="*" component={FourOhFour} />
            <Redirect from="*" to="/404" />
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
