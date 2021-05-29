import React from 'react';
import {
  Link,
} from 'react-router-dom';
import RayaLogo from 'assets/media/raya-logo.svg';
import { useDispatch } from 'react-redux';
import { logout } from 'features/auth/authSlice';

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="raya-navbar box has-background-dark has-text-light">
      <img className="raya-logo" src={RayaLogo} alt="raya-logo" />
      <div>
        <Link to="/dashboard/applicants">
          <button type="button" className="button is-fullwidth is-rounded is-dark link">
            <span className="icon is-large">
              <i className="fas fa-lg fa-user-clock" />
            </span>
            <div>&nbsp;Applicants</div>
          </button>
        </Link>
        <button type="button" className="button is-fullwidth is-rounded is-dark link">
          <span className="icon is-large">
            <i className="fas fa-lg fa-chart-line" />
          </span>
          <div>&nbsp;Stats</div>
        </button>
        <button type="button" className="button is-fullwidth is-rounded is-dark link">
          <span className="icon is-large">
            <i className="fas fa-lg fa-user-check" />
          </span>
          <div>&nbsp;Members</div>
        </button>
        <button type="button" className="button is-fullwidth is-rounded is-dark link">
          <span className="icon is-large">
            <i className="fas fa-lg fa-bell" />
          </span>
          <div>&nbsp;Push Notifications</div>
        </button>
        <button type="button" className="button is-fullwidth is-rounded is-dark link">
          <span className="icon is-large">
            <i className="fas fa-lg fa-map-marker-alt" />
          </span>
          <div>&nbsp;Maps</div>
        </button>
        <button type="button" className="button is-fullwidth is-rounded is-dark link">
          <span className="icon is-large">
            <i className="fas fa-lg fa-scroll" />
          </span>
          <div>&nbsp;Reports</div>
        </button>
        <button type="button" className="button is-fullwidth is-rounded is-dark link">
          <span className="icon is-large">
            <i className="fas fa-lg fa-calendar-alt" />
          </span>
          <div>&nbsp;Events</div>
        </button>
        <button type="button" className="button is-fullwidth is-rounded is-dark link">
          <span className="icon is-large">
            <i className="fas fa-lg fa-laptop-code" />
          </span>
          <div>&nbsp;Algorithm</div>
        </button>
        <Link to="/dashboard/admin-commands">
          <button type="button" className="button is-fullwidth is-rounded is-dark link">
            <span className="icon is-large">
              <i className="fas fa-lg fa-terminal" />
            </span>
            <div>&nbsp;Admin Commands</div>
          </button>
        </Link>
        <hr />
        <button type="button" onClick={() => dispatch(logout())} className="button is-primary is-fullwidth is-rounded is-dark link">
          <span className="icon is-large">
            <i className="fas fa-lg fa-power-off" />
          </span>
          <div>&nbsp;Logout</div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
