import React from 'react'
import SignInLinks from "./SigninLinks";
import SignOutLinks from "./SignoutlLink";
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { auth, profile } = props
    
    // console.log(auth);
    const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />
    
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                {auth.isLoaded && links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar);