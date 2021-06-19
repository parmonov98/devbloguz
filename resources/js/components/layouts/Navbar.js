import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CustomContext } from './../../contexts/CustomContext';
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = ({ title }) => {

    const context = useContext(CustomContext);

    const { locale } = context;

    let ui = locale;
    ui = context.texts[locale];


    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href={`/` + locale + `/`}>{title}</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive,#languageDropdown" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse collapes" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/${locale}/`}>{ui.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/${locale}/about`}>{ui.about}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/${locale}/contact`}>{ui.contact}</Link>
                        </li>
                    </ul>
                </div>
                <LanguageSwitcher />
            </div>
        </nav>
    )
}
export default Navbar;
