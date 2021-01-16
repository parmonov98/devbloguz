import React, { Component } from 'react'

export class Post extends Component {

  componentDidMount(){
    // console.log(this.props.match.params.post_id);
    // console.log(this.props, this.props.match);
    this.props.getPost(this.props.match.params.post_id);
  }

  render() {
    const {post} = this.props;
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
}

export default Post
