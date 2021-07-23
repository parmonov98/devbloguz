import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CustomContext } from './../../contexts/CustomContext'

const Post = ({ getPost, post }) => {

    const { post_slug } = useParams();
    const context = useContext(CustomContext);
    const { locale } = context;

    let ui = locale;
    ui = context.texts[locale];
    const page = ui.pages.find((item) => item.page_name == 'post');


    useEffect(() => {
        getPost(post_slug);
        document.title = ui.app_name + ' - ' + post_slug;
    }, [])

    return (
        <article>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto" dangerouslySetInnerHTML={{ __html: post.content }}>

                    </div>
                </div>
            </div>
        </article>
    )

}

export default Post;
