import React, { Fragment, useContext } from 'react';
import { CustomContext } from './../../contexts/CustomContext';
import { Link } from 'react-router-dom';

const PostItem = ({ id, title, slug, description, author }) => {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const context = useContext(CustomContext);
    const { activeLanguage, locale } = context;

    let ui = activeLanguage;
    ui = context.texts[locale];
    return (
        <Fragment>
            <div className="post-preview" key={id}>
                <Link to={`/${locale}/post/${slug}`}>
                    <h3 className="post-title">
                        {title}
                    </h3>
                    <h3 className="post-subtitle">
                        {description}
                    </h3>
                </Link>
                <p className="post-meta">{ui.author}
                    <Link to={`/${locale}/user/${author}`}> {author} </Link>,
                    {ui.date} {monthNames[new Date().getMonth()]} {new Date().getDay()}, {new Date().getFullYear()}</p>
            </div>
            <hr />
        </Fragment>
    )
}

export default PostItem
