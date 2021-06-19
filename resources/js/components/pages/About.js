import React, { useContext } from 'react';
import { CustomContext } from './../../contexts/CustomContext';

const About = () => {
    const context = useContext(CustomContext);
    const { activeLanguage, locale } = context;

    let ui = locale;
    ui = context.texts[locale];

    const page = ui.pages.find((item) => item.page_name == 'about');

    return (
        <div className="col-lg-8 col-md-10 mx-auto">
            {page.page_text}
        </div>
    )
}

export default About;
