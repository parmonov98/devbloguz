import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = ({getPost, post}) => {

    const {post_slug} = useParams();
    // console.log(post_id);
    useEffect(() => getPost(post_slug), []);

    // console.log(post);
    return (
      <article>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto" dangerouslySetInnerHTML={{__html: post.content}}>

          </div>
        </div>
      </div>
    </article>
    )

}

export default Post;
