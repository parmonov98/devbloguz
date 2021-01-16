import React, { Fragment} from 'react';
import {Link} from 'react-router-dom'

import PostItem from './PostItem';

const Posts = ({ posts, meta, match }) => {

  console.log(posts, meta, match);
  // console.log(props);
  // console.log(meta.links[meta.current_page]);
  return posts ? (
    <div className="col-lg-8 col-md-10 mx-auto">
      {posts.map((post, index) => {
          if(posts.length === index + 1) { 
            return  meta.links ? (
                <Fragment key={post.id}>
                  <PostItem
                    id={post.id}
                    title={post.title}
                    description={post.description.substring(0, 100)}
                    author={post.author}
                  />
                
                  <div className="clearfix">
                    <a className="btn btn-primary float-right" href={`/?page=${meta.current_page}`}>Older Posts &rarr;</a>
                  </div>
                </Fragment>
              ):
              '';
          }
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description.substring(0, 100)}
              author={post.author}
            />
          )
        }

      )}

    </div>
  ) : ''
}

export default Posts;
