import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/viewer">Go to card viewer</Link>
        <br />
        <Link to="/editor">Go to card editor</Link>
      </div>
    );
  }
}

export default Homepage;
