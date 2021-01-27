import React, { Fragment} from 'react';
import {Link} from 'react-router-dom'

import PostItem from './PostItem';

const Posts = ({ posts, meta }) => {

//   console.log(posts, meta);

  return posts.length > 0 && posts ? (
    <div className="col-lg-8 col-md-10 mx-auto">
      {posts.map((post, index) => {
          if(posts.length === index + 1) {
            return  meta.links ? (
                <Fragment key={post.id}>
                  <PostItem
                    id={post.id}
                    title={post.title}
                    slug={post.slug}
                    description={post.description.substring(0, 100)}
                    author={post.author}
                  />

                  {/* <div className="clearfix">
                    <a className="btn btn-primary float-right" href={`/?page=${meta.current_page}`}>Older Posts &rarr;</a>
                  </div> */}
                </Fragment>
              ):
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
