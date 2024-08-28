import React from 'react';
import classes from './projectItem.module.css'; // Ensure this path is correct for your project

const Card = () => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.card}>
        <img src="/chatbox.png" alt="Card 1" className={classes.cardImage} />
        <div className={classes.overlay}>
          <span className={classes.overlayText}>Chat Box</span>
        </div>
      </div>
      <div className={classes.card}>
        <img src="/Foodies.jpg" alt="Card 2" className={classes.cardImage} />
        <div className={classes.overlay}>
          <span className={classes.overlayText}>Foodies Blogpost</span>
        </div>
      </div>
      <div className={classes.card}>
        <img src="/NewsWebsite.png" alt="Card 3" className={classes.cardImage} />
        <div className={classes.overlay}>
          <span className={classes.overlayText}>Next News</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
