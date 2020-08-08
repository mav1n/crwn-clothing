import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { HomePage } from './containers/Homepage/HomepageComponent';
import SignInAndSignUpPage from './containers/SignInAndSignUp/SignInAndSignUpComponent';
import ShopPage from './containers/Shop/ShopComponent';
import Header from './components/Header/HeaderComponent';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });

      }
      
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
