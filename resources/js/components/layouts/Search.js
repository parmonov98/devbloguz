import React, { useState, useContext } from 'react';
import { CustomContext } from './../../contexts/CustomContext';


const Search = ({ setAlert, searchPosts }) => {

    const context = useContext(CustomContext);
    const { activeLanguage } = context;

    let ui = activeLanguage;
    ui = context.texts[activeLanguage];

    const [keywords, setKeywords] = useState('');
    const [alert, setAlertState] = useState(null);

    const onChange = (e) => setKeywords(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (keywords === '') {
            let alert = {
                message: ui.enter_something,
                type: 'warning'
            };
            setAlert(alert);
            searchPosts('');
        } else {
            searchPosts(keywords);
        }
    }

    return (
        <form className="input-group mb-3" onSubmit={onSubmit}>
            <input type="text" className="form-control" onChange={onChange} value={keywords} placeholder={ui.enter_keywords} aria-describedby="basic-addon2" />
            <div className="input-group-append ">
                <button className="btn btn-primary" type="submit">{ui.search_button}</button>
            </div>
        </form>
    )

}

export default Search;
