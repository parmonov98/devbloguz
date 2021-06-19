import React, { useContext, useState } from 'react';
import { useLocation, Redirect, useHistory, Link } from 'react-router-dom';
import { CustomContext } from './../../contexts/CustomContext';

const LanguageSwitcher = () => {

    const url = useLocation();
    const context = useContext(CustomContext);
    const { locale, languages } = context;
    const lang = context.languages.find((item) => item.code == locale);

    const changeLanguage = (lang) => {
        let path = url.pathname;
        path = path.replace(locale, lang);
        window.location.href = path;
    }


    return (
        <div className="dropdown language_dropdown collapes" id="languageDropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {lang.flag}  {lang.title}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                    languages.map((item) => (
                        <a key={item.code} data-lang={item.name} onClick={() => changeLanguage(item.code)} className="dropdown-item" href="#">{item.flag} {item.title}</a>
                    ))
                }
            </div>
        </div>
    );
}

export default LanguageSwitcher;
