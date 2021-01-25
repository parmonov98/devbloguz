import React, { Fragment, Component } from 'react';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './clean-blog.css';

import Navbar from './layouts/Navbar';
import Header from './layouts/Header';
import ProgressBar from './layouts/ProgressBar';
// import ProgressBar from './components/layouts/ProgressBar';
import Footer from './layouts/Footer';
import Posts from './layouts/Posts';
import About from './pages/About';
import Alert from './/layouts/Alert';
import Post from './pages/Post';
import Contact from './pages/Contact';



class App extends Component {
  state = {
    loading: true,
    posts: [],
    post: {},
    links: {},
    meta: {},
    alert: null,
    socials: {
        facebook: "https://www.facebook.com/Parmonov98/",
        twitter: "https://twitter.com/parmonov98",
        github: "https://github.com/parmonov98"
    }
  }

  handleError = (err) => {
    console.warn(err);
    return new Response(JSON.stringify({
        code: 400,
        message: "You're offline!",
        type: 'warning'
    }));
  };

  async componentDidMount (){
    let requestData = (await fetch('/api/posts').catch(this.handleError));
    requestData = await requestData.json();
    // console.log(requestData);
    if (!requestData.code) {
      this.setState({posts: requestData.data, meta: requestData.meta, links: requestData.links, loading: false});

    }else{
      this.setState({loading: false, alert: requestData});
    }
  }

  getPost = (post_id) => {
    // console.log(post_id);
    this.setState({loading: true});
    setTimeout( async () => {
      // console.log(`http://127.0.0.1:8000/api/post/${post_id}`);
      let requestData = await fetch(`/api/posts/${post_id}`);
      requestData = await requestData.json();
      // console.log(requestData);
      this.setState({post: requestData, loading: false});
    }, 500);
  }

  searchPosts = (keywords) => {
    // console.log(keywords);
    this.setState( {posts: null, loading: true});
    setTimeout( async () => {
      // console.log(`http://127.0.0.1:8000/api/post/${post_id}`);
      let requestData = await fetch(`/api/posts/search?q=${keywords}`);
      requestData = await requestData.json();
      this.setState({posts: requestData.data, loading: false});
    }, 500);
  }

  setAlert = (alert) => {

    this.setState({alert: alert});
    setTimeout(() => {
      this.setState({alert: null});
    }, 5000);
  }

  render() {
    return (
      <Router>

      <Fragment>
        <Navbar title="DevBlog.Uz"></Navbar>


            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Header  title={"DevBlog.UZ"} setAlert={this.setAlert} searchPosts={this.searchPosts} subtitle={"A Blog By Murod Parmonov"} image={'home-bg.jpg'}/>
                    <div className="container">
                      <div className="row">
                        <ProgressBar loading={this.state.loading} />
                        <div className="col">
                          <Alert alert={this.state.alert} />
                        </div>
                      </div>
                      <div className="row">
                        <Posts {...this.state.match}  meta={this.state.meta} posts={this.state.posts} />
                      </div>
                    </div>

                  </Fragment>
                )
                } />

              <Route
                exact
                path="/about"
                render={props => (
                  <Fragment>
                    <Header title={"Murod Parmonov"} subtitle={"About @parmonov98"}  image={'about-bg.jpg'}/>
                    <div className="container">
                      <div className="row">
                        <About/>
                      </div>
                    </div>
                  </Fragment>
                )
                } />
              <Route
                exact
                path="/post/:post_id"
                render={props => (
                  <Fragment>
                    <Header  title={this.state.post.title} subtitle={this.state.post.description} image={this.state.post.image}/>
                    <div className="container">
                      <div className="row">
                        <Post {...props}  getPost={this.getPost} post={this.state.post} meta={this.state.meta} links={this.state.links} />
                      </div>
                    </div>
                  </Fragment>
                )
                } />

              <Route
                exact
                path="/contact"
                render={props => (
                  <Fragment>
                    <Header title={"Contact @parmonov98"} subtitle={"Get in touch with Murod Parmonov"} image={'contact-bg.jpg'}/>
                    <div className="container">
                      <div className="row">
                        <Contact/>
                      </div>
                    </div>
                  </Fragment>
                )
                } />

            </Switch>

            <Footer socials={this.state.socials}/>


      </Fragment>
      </Router>
    )
  }
}


export default App;
