import React from "react";

function Qualification() {
  return (
    <div id="qualification" className="white-section">
      <div className="row">
        <div className="col-lg-6 edu">
          <i className="fas fa-graduation-cap fa-3x"></i>
          <h1 className="qualification-title">Education </h1>
          <ul>
            <li>
              Sri krishna college of engineering & technology - Coimbaore - B.E.
              Electronics and communication engineering| className of 2019
            </li>
            <li>
              Sri sowdeswari vidyalaya - Coimbaore - High School | Mathematics
              and Computer science group | className of 2015
            </li>
          </ul>
        </div>

        {/* <!-- Work Experience --> */}
        <div className="col-lg-6">
          <i className="fas fa-briefcase fa-3x"></i>
          <h1 className="qualification-title">Work experience</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Dates</th>
                <th scope="col">Work</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2019 Nov - 2020 Nov</td>
                <td>Programmer Analyst trainee at Cognizant</td>
              </tr>
              <tr>
                <td>2020 Nov - 2021 Feb</td>
                <td>Programmer Analyst at Cognizant</td>
              </tr>
              <tr>
                <td>2021 Jul - Present</td>
                <td>Systems Engineer at Infosys</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
