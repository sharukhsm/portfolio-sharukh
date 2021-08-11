import React from "react";

function Title() {
  return (
    <div id="title" className="colored-section">
      <div className="container-fluid">
        {/* //<!-- Nav Bar -->  */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="navbar-brand">Portfolio</div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contact-me.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Title --> */}

        <div className="row">
          <div className="col-lg-6">
            <img
              className="title-image rotated"
              src="images/profile-picture.png"
              alt="profile-pic"
            />
          </div>

          <div className="col-lg-6">
            <h1 className="big-heading">Sharukh</h1>
            <p>Systems Engineer at Infosys.</p>
            <p>I am a Web Developer. I ❤️ coffee and building computers.</p>

            {/* <!-- Dropdown split button for Linkedin and Resume--> */}
            <div className="btn-group">
              <a
                href="https://www.linkedin.com/in/sharukhsm/"
                className="btn btn-lg btn-dark"
                role="button"
              >
                <i className="fab fa-linkedin"></i> Linkedin profile
              </a>
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="./Resume.pdf">
                  Download Resume!
                </a>
              </div>
            </div>
            {/* <!-- Normal button for Github--> */}
            <a
              href="https://github.com/sharukhsm"
              target="https://github.com/sharukhsm"
              className="btn btn-outline-light btn-lg normal-button"
              itemProp="url"
            >
              {" "}
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
