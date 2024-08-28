import React from 'react';
import classes from './index.module.css';
import ContactUs from '../components/contact';

const EducationalBackground = () => {
  return (
    <>
    <div className={classes.educationalBackground}>
      <h2>Educational Background</h2>

      <div className={classes.educationItem}>
        <h3>Bachelor of Science in Software Engineering</h3>
        <p><strong>Mirpur University Of Science And Technology</strong></p>
        <p>November 2020 - Nov 2026</p>
        
        <h4>Field of Study:</h4>
        <p>Software Engineering</p>

        <h4>Relevant Coursework:</h4>
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>Database Management Systems</li>
          <li>Web Development</li>
          <li>Machine Learning </li>
        </ul>

        <h4>Certifications and Training:</h4>
        <ul>
          <li><strong>Certified AWS Cloud Practitioner</strong> - Amazon Web Services (2023)</li>
          <li><strong>Google UX Design Professional Certificate</strong> - Google (2022)</li>
          <li><strong>Certified Scrum Master (CSM)</strong> - Scrum Alliance (2023)</li>
        </ul>

        <h4>Extracurricular Activities:</h4>
        <ul>
          <li>Ex Member of the <strong>Software Engineering Society</strong> (2022-2023)</li>
          <li>Volunteer tutor for <strong>Introduction to Programming</strong> for first-year students (2021-2023)</li>
        </ul>
      </div>
    </div>
    
    </>
  );
};

export default EducationalBackground;
