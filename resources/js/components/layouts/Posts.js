import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'

import PostItem from './PostItem';

const Posts = ({ posts, meta, params, getPosts }) => {


    const [page_number, setPageNumber] = useState(1);
    const didMountRef = useRef(false);
    const url = window.location.pathname.split('/').pop();

    // console.log(params.page_number);


    useEffect(() => {
        console.log(page_number);
        if (parseInt(params.page_number) !== page_number) {
            // alert(params.page_number);
            setPageNumber(params.page_number);
            getPosts(parseInt(params.page_number));
        } else {
            setPageNumber(params.page_number);
            getPosts(parseInt(params.page_number));
        }
    }, [url])





    return posts.length > 0 && posts ? (
        <div className="col-lg-8 col-md-10 mx-auto">
            {posts.map((post, index) => {
                if (posts.length === index + 1) {
                    return meta.links ? (
                        <Fragment key={post.id}>
                            <PostItem
                                id={post.id}
                                title={post.title}
                                slug={post.slug}
                                description={post.description.substring(0, 100)}
                                author={post.author}
                            />

                        </Fragment>
                    ) :
                        '';
                }
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
            }

            )}

        </div>
    ) : 'No posts found'
}

export default Posts;
