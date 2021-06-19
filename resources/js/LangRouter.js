import React, { Component, useState, useEffect } from 'react'
import {
    Route,
    Link,
    Redirect,
    Switch,
    withRouter,
    useLocation
} from 'react-router-dom';
import App from './components/App';
import Page404 from './components/pages/Page404'
import CustomContextProvider from './contexts/CustomContext';

const LangRouter = (props) => {

    const url = useLocation();
    const localStorageLang = window.localStorage.getItem('locale');
    const [locale, setLocale] = useState(localStorageLang);

    useEffect(() => {
        let urlLocale = url.pathname.substring(1, 3);
        if (locale !== urlLocale && urlLocale !== '') {

            if (localStorageLang == 'uz' || localStorageLang == 'ru' || localStorageLang == 'en') {
                setLanguage(urlLocale);
            } else {
                setLanguage('uz')
            }


        } else {
            setLanguage(locale);
        }

    }, []);


    const setLanguage = (newLocale) => {
        setLocale(newLocale);
        window.localStorage.setItem('locale', newLocale);
    }

    return (
        <CustomContextProvider {...props} setLanguage={setLanguage} locale={locale}>
            <Switch>
                <Route path="/" exact render={propRouter => {
                    return <Redirect to={locale + "/"} />
                }} />
                <Route path="/en/*" render={
                    propsRouter =>
                        <App
                            {...propsRouter}
                            locale={locale}
                            setLocale={setLocale}
                        />
                } />
                <Route path="/ru/*" render={
                    propsRouter =>
                        <App
                            {...propsRouter}
                            locale={locale}
                            setLocale={setLocale}
                        />
                } />
                <Route path="/uz/*" render={
                    propsRouter =>
                        <App
                            {...propsRouter}
                            locale={locale}
                            setLocale={setLocale}
                        />
                } />
                <Route path="*" render={
                    propsRouter =>
                        <Page404
                            {...propsRouter}
                            locale={locale}
                            setLocale={setLocale}
                        />
                } />
            </Switch>

        </CustomContextProvider>
    )

}


export default LangRouter;
