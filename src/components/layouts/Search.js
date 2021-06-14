import React, { Component } from 'react'

export class Search extends Component {

    state = {
        keywords: ''
    }

    onChange = (e) => this.setState({ keywords: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.keywords === '') {
            let alert = {
                message: "PLease, Enter something",
                type: 'warning'
            };
            this.props.setAlert(alert);
        } else {
            this.props.searchPosts(this.state.keywords);
        }
    }


    render() {
        return (
            <form className="input-group mb-3" onSubmit={this.onSubmit}>
                <input type="text" className="form-control" onChange={this.onChange} value={this.state.keywords} placeholder="Enter keywords" aria-label="Enter keywords" aria-describedby="basic-addon2" />
                <div className="input-group-append ">
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
            </form>
        )
    }
}

export default Search;
