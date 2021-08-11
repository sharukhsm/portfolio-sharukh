import React from "react";

function Skills() {
  return (
    <div id="skills" class="white-section">
      <div class="container-fluid">
        <h1>Skills</h1>
        <div class="row">
          <div class="feature-box col-lg-4 col-md-6 col-sm-6">
            <i class="fab fa-html5 features-logo fa-4x"></i>
            <h3 class="feature-title">Html</h3>
          </div>

          <div class="feature-box col-lg-4 col-md-6 col-sm-6">
            <i class="fab fa-css3-alt features-logo fa-4x"></i>
            <h3 class="feature-title">Css</h3>
          </div>

          <div class="feature-box col-lg-4 col-md-6 col-sm-6">
            <i class="fab fa-js-square features-logo fa-4x"></i>
            <h3 class="feature-title">JavaScript</h3>
          </div>

          <div class="feature-box col-lg-4 col-md-6 col-sm-6">
            <i class="fab fa-react features-logo fa-4x"></i>
            <h3 class="feature-title">React</h3>
          </div>

          <div class="feature-box col-lg-4 col-md-6 col-sm-6">
            <i class="fab fa-bootstrap features-logo fa-4x"></i>
            <h3 class="feature-title">Bootstrap</h3>
          </div>

          <div class="feature-box col-lg-4 col-md-6 col-sm-6">
            <i class="fab fa-github features-logo fa-4x"></i>
            <h3 class="feature-title">Git/Github</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
