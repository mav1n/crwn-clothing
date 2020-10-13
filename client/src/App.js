import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './globalStyles';

import Header from './components/Header/HeaderComponent';
import Spinner from './components/Spinner/SpinnerComponent';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundaryComponent';
import { selectCurrentUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';

const HomePage = lazy(() => import('./containers/Homepage/HomepageComponent'))
const SignInAndSignUpPage = lazy(() => import('./containers/SignInAndSignUp/SignInAndSignUpComponent'))
const ShopPage = lazy(() => import('./containers/Shop/ShopComponent'))
const CheckoutPage = lazy(() => import('./containers/Checkout/CheckoutComponent'))

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
