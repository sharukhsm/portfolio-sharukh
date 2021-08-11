import React from "react";

function Skills() {
  return (
    <div id="skills" className="white-section">
      <div className="container-fluid">
        <h1>Skills</h1>
        <div className="row">
          <div className="feature-box col-lg-4 col-md-6 col-sm-6">
            <i className="fab fa-html5 features-logo fa-4x"></i>
            <h3 className="feature-title">Html</h3>
          </div>

          <div className="feature-box col-lg-4 col-md-6 col-sm-6">
            <i className="fab fa-css3-alt features-logo fa-4x"></i>
            <h3 className="feature-title">Css</h3>
          </div>

          <div className="feature-box col-lg-4 col-md-6 col-sm-6">
            <i className="fab fa-js-square features-logo fa-4x"></i>
            <h3 className="feature-title">JavaScript</h3>
          </div>

          <div className="feature-box col-lg-4 col-md-6 col-sm-6">
            <i className="fab fa-react features-logo fa-4x"></i>
            <h3 className="feature-title">React</h3>
          </div>

          <div className="feature-box col-lg-4 col-md-6 col-sm-6">
            <i className="fab fa-bootstrap features-logo fa-4x"></i>
            <h3 className="feature-title">Bootstrap</h3>
          </div>

          <div className="feature-box col-lg-4 col-md-6 col-sm-6">
            <i className="fab fa-github features-logo fa-4x"></i>
            <h3 className="feature-title">Git/Github</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
