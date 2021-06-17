import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostItem from './../layouts/PostItem';

const User = ({ getUser, user }) => {
    const { username } = useParams();
    const [posts, setUserPosts] = useState([]);

    useEffect(() => {
        getUser(username);
        setUserPosts(user.posts);
    }, []);

    // console.log(username);


    console.log(user, user.posts);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">

                    <div className="card w-100 p-3">
                        <div className="card-title">
                            <h4>{user.username}</h4>
                            <h6>{user.email}</h6>
                        </div>
                        <div className="card-body">
                            <b>{user.username}</b> signed up at {user.created_at} as {user.role}
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-10 mx-auto">
                    {
                        (user.posts && user.posts.length > 0) ?
                            (user.posts.map((post, index) => {
                                return (
                                    <PostItem
                                        key={post.id}
                                        id={post.id}
                                        slug={post.slug}
                                        title={post.title}
                                        description={post.description.substring(0, 100)}
                                        author={post.author}
                                    />
                                )
                            }))
                            : "no posts by user"
                    }
                </div>
            </div>
        </div>
    )

}

export default User;
