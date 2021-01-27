import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ id, title, description, author}) => {
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // let monthName = monthNames[monthNumber];
  return (
    <Fragment>
      <div className="post-preview" key={id}>
          <Link to={`/post/${id}`}>
            <h3 className="post-title">
              {title}
            </h3>
            <h3 className="post-subtitle">
              {description}
            </h3>
          </Link>
          <p className="post-meta">Posted by
            <Link to={`/user/${author}`}> {author} </Link>
            on {monthNames[new Date().getMonth()]} {new Date().getDay()}, {new Date().getFullYear()}</p>
        </div>
        <hr/>
    </Fragment>
  )
}

export default PostItem
