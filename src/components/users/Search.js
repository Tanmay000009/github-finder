import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    // event.taget.name as same function can be reused in case of multiple inputs
    onChange = (event) => this.setState({[event.target.name]: event.target.value});
        
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something','light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
    };

    render() {
        const {showClear,clearUsers} = this.props;

        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" id="" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && 
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                }
                
            </div>
        )
    }
}

export default Search
