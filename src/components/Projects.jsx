import React from "react";

function Projects() {
  return (
    <div id="projects" className="white-section">
      <h2 className="section-heading">Projects</h2>

      <div className="row">
        <div className="project-column  col-lg-4 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Random food generator</h3>
            </div>
            <div className="card-body">
              <p>Find hard what to eat for the next meal? Try this app</p>
              <i className="fab fa-html5 tech-logo fa-2x"></i>
              <i className="fab fa-css3-alt tech-logo fa-2x"></i>
              <i className="fab fa-js-square tech-logo fa-2x"></i>
              <i className="fab fa-bootstrap tech-logo fa-2x"></i>

              <a
                href="https://sharukhsm.github.io/RandomFoodGenerator/"
                className="btn btn-lg btn-block btn-outline-dark"
                itemProp="url"
              >
                Live server
              </a>
            </div>
          </div>
        </div>

        <div className="project-column col-lg-4 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Keeper</h3>
            </div>
            <div className="card-body">
              <p>Keeper is a simple note taking app</p>
              <i className="fab fa-html5 tech-logo fa-2x"></i>
              <i className="fab fa-css3-alt tech-logo fa-2x"></i>
              <i className="fab fa-js-square tech-logo fa-2x"></i>
              <i className="fab fa-react tech-logo fa-2x"></i>

              <a
                href="https://l1jq0.csb.app/"
                className="btn btn-lg btn-block btn-dark"
                itemProp="url"
              >
                Live server
              </a>
            </div>
          </div>
        </div>

        <div className="project-column col-lg-4 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Restaurant landing page</h3>
            </div>
            <div className="card-body">
              <p>A landing page for a restaurant</p>
              <i className="fab fa-html5 tech-logo fa-2x"></i>
              <i className="fab fa-css3-alt tech-logo fa-2x"></i>

              <a
                href="https://sharukhsm.github.io/Restaurant-landing-page/"
                className="btn btn-lg btn-block btn-dark"
                itemProp="url"
              >
                Live server
              </a>
            </div>
          </div>
        </div>

        <div className="project-column col-lg-4 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Emojipedia</h3>
            </div>
            <div className="card-body">
              <p>
                Emojipedia is an emoji reference website which documents the
                meaning and common usage of emoji characters.
              </p>
              <i className="fab fa-html5 tech-logo fa-2x"></i>
              <i className="fab fa-css3-alt tech-logo fa-2x"></i>
              <i className="fab fa-js-square tech-logo fa-2x"></i>
              <i className="fab fa-react tech-logo fa-2x"></i>

              <a
                href="https://w54wd.csb.app/"
                className="btn btn-lg btn-block btn-dark"
                itemProp="url"
              >
                Live server
              </a>
            </div>
          </div>
        </div>

        <div className="project-column col-lg-4 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Audio player</h3>
            </div>
            <div className="card-body">
              <p>
                A simple audio player app with wave navigation controls made
                using wavesurfer.js library.
              </p>
              <i className="fab fa-html5 tech-logo fa-2x"></i>
              <i className="fab fa-css3-alt tech-logo fa-2x"></i>
              <i className="fab fa-js-square tech-logo fa-2x"></i>

              <a
                href="https://sharukhsm.github.io/Audio-Player/"
                className="btn btn-lg btn-block btn-dark"
                itemProp="url"
              >
                Live server
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
