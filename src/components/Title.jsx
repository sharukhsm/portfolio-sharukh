import React from "react";

function Title() {
  return (
    <div id="title" class="colored-section">
      <div class="container-fluid">
        {/* <!-- Nav Bar --> */}
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="navbar-brand">Portfolio</div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contact-me.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Title --> */}

        <div class="row">
          <div class="col-lg-6">
            <img
              class="title-image rotated"
              src="images/profile-picture.png"
              alt="profile-pic"
            />
          </div>

          <div class="col-lg-6">
            <h1 class="big-heading">Sharukh</h1>
            <p>Systems Engineer at Infosys.</p>
            <p>I am a Web Developer. I ❤️ coffee and building computers.</p>

            {/* <!-- Dropdown split button for Linkedin and Resume--> */}
            <div class="btn-group">
              <a
                href="https://www.linkedin.com/in/sharukhsm/"
                class="btn btn-lg btn-dark"
                role="button"
              >
                <i class="fab fa-linkedin"></i> Linkedin profile
              </a>
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="./Resume.pdf">
                  Download Resume!
                </a>
              </div>
            </div>
            {/* <!-- Normal button for Github--> */}
            <a
              href="https://github.com/sharukhsm"
              target="https://github.com/sharukhsm"
              class="btn btn-outline-light btn-lg normal-button"
              itemprop="url"
            >
              {" "}
              <i class="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
