import React, { useContext } from 'react';
import { CustomContext } from './../../contexts/CustomContext';

const About = () => {
    const context = useContext(CustomContext);
    console.log(context);
    const { activeLanguage } = context;

    let ui = activeLanguage;
    ui = context.texts[activeLanguage];

    const page = ui.pages.find((item) => item.page_name == 'about');

    console.log(page);

    return (
        <div className="col-lg-8 col-md-10 mx-auto">
            {page.page_text}
        </div>
    )
}

export default About;
