import React from 'react';
import classes from './about.module.css';
import ContactUs from '../components/contact';

export default function About() {
  return (
    <>
    <div className={classes.aboutBody}>
      <h1 className={classes.about1}>About</h1>
      <p className={classes.mail}>shoaibaali1945@gmail.com</p>
      <p className={classes.intro}>
        Meet an exceptional programmer and web developer who possesses a diverse skill set and a passion for crafting exceptional digital experiences. With a strong foundation in JavaScript, HTML, CSS, C#, Python, and C++, this talented individual combines technical expertise with creative problem-solving to bring innovative ideas to life. Armed with the ability to seamlessly blend functionality and aesthetics, they have mastered the art of building responsive and visually captivating websites and applications. Their expertise extends from front-end development, utilizing HTML, CSS, and JavaScript to create intuitive user interfaces, to back-end development, harnessing the power of C#, Python, and C++ to implement robust functionality and data manipulation.
      </p>
      <p className={classes.state}>Jhang, Punjab</p>
      <p className={classes.address}>Check No 6/3L</p>
      
      <hr className={classes.line} />
      <hr className={classes.line2}/>

  
    </div>
    <ContactUs />
    </>
  );
}
