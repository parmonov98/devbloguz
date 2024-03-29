import React, { Fragment, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, useLocation } from 'react-router-dom';
import { CustomContext } from './../contexts/CustomContext';
// import PropTypes from 'prop-types';
import './pages/clean-blog.css';

import Navbar from './layouts/Navbar';
import Header from './layouts/Header';
import ProgressBar from './layouts/ProgressBar';
import PostsPagination from './layouts/PostsPagination';
// import ProgressBar from './components/layouts/ProgressBar';
import Footer from './layouts/Footer';
import Posts from './layouts/Posts';
import About from './pages/About';
import Alert from './/layouts/Alert';
import Post from './pages/Post';
import User from './pages/User';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';


const App = (props) => {

    const context = useContext(CustomContext);
    const url = useLocation();

    const { locale } = context;

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});
    const [links, setLinks] = useState(null);
    const [meta, setMeta] = useState(null);
    const [alert, setAlert] = useState(null);


    const [socials, setsocials] = useState(
        {
            facebook: "https://www.facebook.com/Parmonov98/",
            twitter: "https://twitter.com/parmonov98",
            github: "https://github.com/parmonov98"
        }
    );

    const getPosts = async (page) => {
        let requestData = (await fetch(`/api/posts?page=${page}`).catch(handleError));
        requestData = await requestData.json();
        if (!requestData.code) {
            setPosts(requestData.data);
            if (requestData.meta) {
                setMeta(requestData.meta);
            } else {
                setMeta(null);
            }
            if (requestData.links) {
                setLinks(requestData.links);
            } else {
                setLinks(null);
            }
            setLoading(false);
        } else {
            //   this.setState({loading: false, alert: requestData});
            setLoading(false);
            setAlert(requestData);
        }
    }

    const handleError = (err) => {
        // console.warn(err);
        return new Response(JSON.stringify({
            code: 400,
            message: "You're offline!",
            type: 'warning'
        }));
    };

    const getPost = (post_slug) => {
        // console.log(post_slug);
        setLoading(true);
        (async () => {
            let requestData = await fetch(`/api/post/${post_slug}`);
            requestData = await requestData.json();
            // console.log(requestData);
            setPost(requestData)
            setLoading(false);
        })()

    }

    const getUser = (username) => {
        setLoading(true);
        (async () => {
            let requestData = await fetch(`/api/user/${username}`);
            requestData = await requestData.json();
            // console.log(requestData);
            setUser(requestData.data);
            setLoading(false);
        })()

    }

    const sendMessage = async (formData) => {
        // console.log(post_id);
        // console.log(formData);
        let requestData = await fetch(`/api/contact`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formData)
        });
        setLoading(false);
        return requestData.json();
    }

    const searchPosts = async (keywords) => {

        let requestData = await fetch(`/api/posts/search?q=${keywords}`);
        requestData = await requestData.json();

        // console.log(requestData);
        setPosts(requestData.data);
        if (requestData.meta) {
            setMeta(requestData.meta);
        } else {
            setMeta(null);
        }
        if (requestData.links) {
            setLinks(requestData.links);
        } else {
            setLinks(null);
        }

    }

    const showAlert = (alert) => {

        setAlert(alert);
        setTimeout(() => {
            setAlert(null);
        }, 5000);
    }



    return (


        <Fragment>

            <Navbar title="DevBlog.Uz"></Navbar>

            <Switch>
                <Route
                    exact
                    path={[`/` + locale + `/`, `/` + locale]}
                    render={props => (
                        <Fragment>
                            <Header
                                title={"DevBlog.UZ"}
                                setAlert={showAlert}
                                searchPosts={searchPosts}
                                subtitle={"A Blog By Murod Parmonov"}
                                image={'home-bg.jpg'}
                            />
                            <div className="container">
                                <div className="row">
                                    <ProgressBar loading={loading} />
                                    <div className="col">
                                        <Alert alert={alert} />
                                    </div>
                                </div>
                                <div className="row">
                                    <Posts meta={meta} posts={posts} params={props.match.params} getPosts={getPosts} />
                                </div>
                                <div className="row justify-content-center">
                                    {posts.length > 0 ? <PostsPagination meta={meta} links={links} /> : "no posts"}
                                </div>
                            </div>

                        </Fragment>
                    )
                    } />
                <Route
                    path={[`/` + locale + "/page/:page_number"]}
                    render={props => (
                        <Fragment>
                            <Header
                                title={"DevBlog.UZ"}
                                setAlert={showAlert}
                                searchPosts={searchPosts}
                                subtitle={"A Blog By Murod Parmonov"}
                                image={'home-bg.jpg'}
                            />
                            <div className="container">
                                <div className="row">
                                    <ProgressBar loading={loading} />
                                    <div className="col">
                                        <Alert alert={alert} />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <Posts meta={meta} posts={posts} params={props.match.params} getPosts={getPosts} />
                                </div>
                                <div className="row justify-content-center">
                                    {posts.length > 0 ? <PostsPagination meta={meta} links={links} /> : "no posts"}
                                </div>
                            </div>

                        </Fragment>
                    )
                    } />
                <Route
                    exact

                    path={`/` + locale + `/user/:username`}
                    render={props => (
                        <Fragment>
                            <Header title={post.title} subtitle={post.description} image={post.image} />
                            <div className="container">
                                <div className="row">
                                    <User {...props} getUser={getUser} user={user} />
                                </div>
                            </div>
                        </Fragment>
                    )
                    } />

                <Route
                    exact
                    path={`/` + locale + "/about"}
                    render={props => (
                        <Fragment>
                            <Header title={"Murod Parmonov"} subtitle={"About @parmonov98"} image={'about-bg.jpg'} />
                            <div className="container">
                                <div className="row">
                                    <About />
                                </div>
                            </div>
                        </Fragment>
                    )
                    } />
                <Route
                    exact
                    path={`/` + locale + "/post/:post_slug"}
                    render={props => (
                        <Fragment>
                            <Header title={post.title} subtitle={post.description} image={post.image} />
                            <div className="container">
                                <div className="row">
                                    <Post {...props} getPost={getPost} post={post} meta={meta} links={links} />
                                </div>
                            </div>
                        </Fragment>
                    )
                    } />

                <Route
                    exact
                    path={`/` + locale + "/contact"}
                    render={props => (
                        <Fragment>
                            <Header title={"Contact @parmonov98"} subtitle={"Get in touch with Murod Parmonov"} image={'contact-bg.jpg'} />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Alert alert={alert} />
                                    </div>
                                </div>
                                <div className="row">
                                    <Contact sendMessage={sendMessage} showAlert={showAlert} />
                                </div>
                            </div>
                        </Fragment>
                    )
                    } />
                <Route
                    render={props => (
                        <Fragment>
                            <Header title={"404 Page"} subtitle={"Please, go to Home"} image={'404-page.jpg'} />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Alert alert={alert} />
                                    </div>
                                </div>
                                <div className="row">
                                    <Page404 />
                                </div>
                            </div>
                        </Fragment>
                    )
                    } />

            </Switch>

            <Footer socials={socials} />
        </Fragment>


    )

}


export default App;
