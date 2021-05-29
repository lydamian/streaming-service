import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './Landing.css';
// import UndrawDesignerGirl from 'assets/media/undraw-designer-girl.svg';

const Landing = () => (
  <div id="landing" className="container pt-6">
    <div id="landing-background">
      {/* <img src={UndrawDesignerGirl} alt="UndrawDesignerGirl" id="designer-girl" /> */}
      <div id="main-section">
        <div className="box content has-text-white">
          <h1 className="has-text-centered has-text-white">
            Welcome to
            <br />
            Raya DG Dash
          </h1>
          <p>
            See all the new features we’ve added through our tutorial.
          </p>
          <Link to="/dashboard">
            <button type="button" className="button is-primary is-large is-rounded">
              Enter
            </button>
          </Link>
          <br />
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
