import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// import Post from '../../components/Post/Post';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true,
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                to="/posts/"
                exact
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}
              >Posts</NavLink></li>
              <li><NavLink
                to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}
              >New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth && <Route path="/new-post" exact component={AsyncNewPost} />}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          <Redirect from="/" to="/posts" />
          {/* <Route path="/" component={Posts} /> */}
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;