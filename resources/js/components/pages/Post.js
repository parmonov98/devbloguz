import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = ({getPost, post}) => {

    const {post_id} = useParams();
    // console.log(post_id);
    useEffect(() => getPost(post_id), []);

    // console.log(post);
    return (
      <article>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {post.content}
          </div>
        </div>
      </div>
    </article>
    )

}

export default Post;
