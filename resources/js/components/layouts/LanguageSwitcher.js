import React, { useContext } from 'react';
import { CustomContext } from './../../contexts/CustomContext';

const LanguageToggle = () => {


    const context = useContext(CustomContext);
    const { activeLanguage, languages, switchActiveLanguage } = context;
    let lang = activeLanguage;
    lang = context.languages.find((item) => item.name == activeLanguage);

    return (
        <div className="dropdown" >
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {lang.flag}  {lang.title}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                    languages.map((item) => (
                        <a key={item.code} onClick={() => switchActiveLanguage(`${item.name}`)} data-lang={item.name} className="dropdown-item" href="#">{item.flag} {item.title}</a>
                    ))
                }
            </div>
        </div>
    );
}

export default LanguageToggle;
