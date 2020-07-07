import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions'

const SignInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Projects</NavLink>
      </li>
      <li>
        <button className="btn-small grey darken-3 z-depth-0" onClick={props.signOut}>
          Log Out
        </button>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLinks);
