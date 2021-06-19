import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../layouts/Search';
import { CustomContext } from '../../contexts/CustomContext';

// import BackgroundImage from '../../../public/assets/home-bg.jpg';
// const images = require.context("../../../public/assets", true);


// static image

const Header = ({ image, title, subtitle, searchPosts, setAlert }) => {
    // let pageHeaderImage = images(`./${image}`);

    const url = useLocation();

    // console.log(url.pathname);

    const context = useContext(CustomContext);
    const { activeLanguage, locale } = context;


    let ui = locale;
    ui = context.texts[locale];

    if (url.pathname == '/' + locale + '/') {
        subtitle = ui.app_title;
    }
    if (url.pathname == '/' + locale + '/contact' || url.pathname == '/' + locale + '/contact/') {
        const page = ui.pages.find((item) => item.page_name == 'contact');
        title = page.page_title;
        subtitle = page.page_subtitle;
    }
    if (url.pathname == '/' + locale + '/about' || url.pathname == '/' + locale + '/about/') {
        const page = ui.pages.find((item) => item.page_name == 'about');
        title = page.page_title;
        subtitle = page.page_subtitle;
    }

    return (
        <header className="masthead" style={{ backgroundImage: `url(/assets/${image})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h2 className="" style={{ fontSize: '3rem' }}>{title}</h2>
                            <span className="subheading">{subtitle}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        {searchPosts ? <Search setAlert={setAlert} searchPosts={searchPosts} /> : ''}

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;
