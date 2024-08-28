  import React from 'react';
  import classes from './hoverCard.module.css';

  function HoverCard() {
    return (
      <div className={classes.card}>
        <p>
          <img src='/chatbox.png' alt="Description 1" />
          <span>Chat Box</span>
        </p>
        <p>
          <img src="/Foodies.jpg" alt="Description 2" />
          
        </p>
        <p>
          <img src="/NewsWebsite.png" alt="Description 3" />
          
        </p>
      </div>
    );
  }

  export default HoverCard;
