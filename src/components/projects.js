import React from 'react';
import '../global.css';  // Import your global CSS file
import HoverCard from './hoverCard';

function Projects() {
  return (
    <>
    <div className="contshadow"></div>
    <div className="projects">
      <br /><br /><br />
      <div className="row g-2">
        <div className="col-12">
          <div className="heading-intro p-3 text-center projects-title">PROJECTS</div>
        </div>
        <div className="col-12">
          <div className="p-3 text-center skills">The Finest Creations I've Crafted</div>
        </div>
        <div className="col-12">
          <div className="p-3 text-center description">
            <center>
              <p style={{ width: '450px' }}>
                With precision coding and innovative design, these creations showcase my ability to merge technology and captivating user experiences seamlessly. This collection is a testament to my commitment to excellence across diverse digital platforms.
              </p>
            </center>
          </div>
        </div>
        <HoverCard />
      </div>
     
     
    
    </div>
    </>
  );
}

export default Projects;
