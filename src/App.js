import React, { Fragment, Component } from 'react';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './clean-blog.css';

import Navbar from './components//layouts/Navbar';
import Header from './components//layouts/Header';
import ProgressBar from './components//layouts/ProgressBar';
// import ProgressBar from './components/layouts/ProgressBar';
import Footer from './components/layouts/Footer';
import Posts from './components/layouts/Posts';
import About from './components/pages/About';
import Alert from './components/layouts/Alert';
import Post from './components/pages/Post';
import Contact from './components/pages/Contact';



class App extends Component {
  state = {
    loading: true,
    posts: [],
    post: {},
    links: {},
    meta: {},
    alert: null,
  }

  handleError = (err) => {
    console.warn(err);
    return new Response(JSON.stringify({
        code: 400,
        message: "You're offline!"
    }));
  };

  async componentDidMount (){
    let requestData = (await fetch('http://127.0.0.1:8000/api/posts').catch(this.handleError));
    requestData = await requestData.json();
    // console.log(requestData);
    if (!requestData.code) {
      this.setState({posts: requestData.data, meta: requestData.meta, links: requestData.links, loading: false});      

    }else{
      this.setState({alert: requestData});
    }
  }  

  getPost = (post_id) => {
    // console.log(post_id);
    this.setState({loading: true});
    setTimeout( async () => {
      // console.log(`http://127.0.0.1:8000/api/post/${post_id}`);
      let requestData = await fetch(`http://127.0.0.1:8000/api/posts/${post_id}`);
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
      let requestData = await fetch(`http://127.0.0.1:8000/api/posts/search?q=${keywords}`);
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
        
        <Footer/>

        
      </Fragment>
      </Router>
    )
  }
}


export default App;
