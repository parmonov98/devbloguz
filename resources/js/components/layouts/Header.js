import React from 'react';
import Search from '../layouts/Search';
// import BackgroundImage from '../../../public/assets/home-bg.jpg';
// const images = require.context("../../../public/assets", true);


// static image

const Header = ({ image, title, subtitle, searchPosts, setAlert }) => {
    // let pageHeaderImage = images(`./${image}`);

    //   console.log(111);
    //   console.log(searchPosts);

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
