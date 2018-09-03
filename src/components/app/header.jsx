import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        RECORDBIN
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li
            className={
              props.routing.pathname !== '/' ? 'nav-item' : 'nav-item active'
            }>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={
              props.routing.pathname !== '/about-us'
                ? 'nav-item'
                : 'nav-item active'
            }>
            <Link className="nav-link" to="/aboutUs">
              {' '}
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  routing: state.routing.location
});

export default connect(mapStateToProps)(Header);
