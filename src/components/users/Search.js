import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({setAlert }) => {
  const githubContext = useContext(GithubContext);
  
  // Setting state
  //name setName(can be anything) = useState(default value)
  const [text, setText] = useState("");

  // event.taget.name as same function can be reused in case of multiple inputs
  const onChange = (event) =>
    setText( event.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText( '');
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id=""
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length>0 && (
        <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
