import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home/Home';
import P404 from '../pages/404/404';
import TweetsByHashtag from '../pages/tweetsByHashtag/TweetsByHashtag';
import TweetsByUser from '../pages/tweetsByUser/TweetsByUser';
import AuthPage from '../pages/auth/AuthPage';

const App = () => {
    return (

        <BrowserRouter>
        <Switch>
            <Route path="/login" component={AuthPage}/>
            <Route path={"/"} render={() =>
             <Layout>
                    <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/hashtags/:hashtag"} component={TweetsByHashtag} />
                        <Route exact path={"/users/:user"} component={TweetsByUser} />
                        <Route component={P404} />
                    </Switch>
                </Layout>
            }/>
            </Switch>
        </BrowserRouter>

    );
};

export default App;