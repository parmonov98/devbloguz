import React, { useState } from 'react';


const Search = ({setAlert, searchPosts}) => {

  const [keywords, setKeywords] = useState('');
  const [alert, setAlertState] = useState(null);

  const onChange = (e) => setKeywords(e.target.value);
  
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    if (keywords === '') {
      let alert = {
        message: "PLease, Enter something",
        type: 'warning'
      };
      setAlert(alert);
    }else{
      // alert(1);
      searchPosts(keywords);
      // this.setState({ search: ''});
    }
  }
  
  return (
    <form className="input-group mb-3" onSubmit={onSubmit}>
      <input type="text" className="form-control" onChange={onChange} value={keywords} placeholder="Enter keywords" aria-label="Enter keywords" aria-describedby="basic-addon2"/>
      <div className="input-group-append ">
        <button className="btn btn-primary" type="submit">Search</button>
      </div>
    </form>
  )
  
}

export default Search;
