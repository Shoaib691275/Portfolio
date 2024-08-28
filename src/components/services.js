import React from 'react';
import '../global.css';  // Import your global CSS file

function Services() {
  return (
    <div className="services">
      <div className="d-flex flex-column bd-highlight mb-3 service-intro">
        <div className="p-5 bd-highlight text-center service-text">
          <h4 className="heading-intro">SERVICES</h4>
          <h2 className="service_intro">What I Am Great At</h2>
          <p className="service_description">
            "Proficient in app, game, and web development, <br /> 
            I excel at creating captivating digital experiences. My expertise <br /> 
            lies in crafting user-centric apps, immersive games, and responsive web solutions <br /> 
            that seamlessly blend innovation and functionality."
          </p>
        </div>
        <div  className="flex-container bd-highlight service-cards">
          <div className="container overflow-hidden">
            <div className="row gy-6">
              <div className="skilled col">
                <div className="skillset ">
                  <img src="coding.png" alt="" />
                  <br /> Web Development <br />
                  <p>5 projects</p>
                </div>
              </div>
              <div className="skilled col">
                <div className="skillset ">
                  <img src="pen-outline.png" alt="" />
                  <br /> UI/UX Design <br />
                  <p>7 projects</p>
                </div>
              </div>
              <div className="skilled col">
                <div className="skillset ">
                  <img src="shield.png" alt="" />
                  <br /> Web Security <br />
                  <p>currently none</p>
                </div>
              </div>
              <div className="skilled col">
                <div className="skillset ">
                  <img src="api.png" alt="" />
                  <br /> API Integration <br />
                  <p>2 projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 bd-highlight service-stats">
          <div className="container overflow-hidden">
            <div className="row gy-5 text-center service-statistics">
              <div className="col-3">
                <div className="p-3">
                  <p className="serviceCount">2+</p>Years Of Experience
                </div>
              </div>
              <div className="col-3">
                <div className="p-3">
                  <p className="serviceCount">3+</p>Satisfied Customers
                </div>
              </div>
              <div className="col-3">
                <div className="p-3">
                  <p className="serviceCount">8+</p>Designed Items
                </div>
              </div>
              <div className="col-3">
                <div className="p-3">
                  <p className="serviceCount">5+</p>Clients Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
