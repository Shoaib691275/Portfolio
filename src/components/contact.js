import React from "react";
import classes from "./contact.module.css";

function ContactUs() {
  return (
    <div className={classes.contact}>
      <div className={classes.contactContainer}>
        <div className="row text-center">
          <div className={classes.headingIntro}>CONTACT US</div>
          <div className={classes.skills}>WAYS TO CONTACT ME</div>
          <div className="col-12">
            <p className={classes.contactDescription}>
              For inquiries, collaborations, or to discuss potential projects,
              please don't hesitate
              <br /> to reach out. We are dedicated to prompt and professional
              communication.
              <br /> Your interest is important to us.
            </p>
          </div>
          <div className={classes.contactLinks}>
            <div className={classes.contactLinkItem}>
              <img src="icons/twitter (1).png" alt="Twitter" />
              <p>@De-Coder</p>
            </div>
            <div className={classes.contactLinkItem}>
              <img src="icons/facebook.png" alt="Facebook" />
              <p>MD Shoaib Ali</p>
            </div>
            <div className={classes.contactLinkItem}>
              <img src="icons/telephone (2).png" alt="Phone" />
              <p>0341298100</p>
            </div>
          </div>
          <div className={`${classes.contactLinks} ${classes.mail}`}>
            <div className={classes.contactLinkItem}>
              <img src="icons/mail.png" alt="Email" />
              <p>
                <a
                  className={classes.Contacts}
                  href="mailto:shoaibaali1945@gmail.com"
                >
                  shoaibaali1945@gmail.com
                </a>
              </p>
            </div>
          </div>
          <hr className={classes.contactDivider} />
          <p className={classes.contactCopyright}>
            &copy; Copyright-Turture | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
