import ContactUs from '../components/contact';
import classes from './index.module.css';

export default function Contact() {
  return (
    <>
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="textarea">Something on your mind?</label>
          <textarea
            name="textarea"
            id="textarea"
            rows="10"
            cols="50"
            required
          ></textarea>
        </div>
        <button className={classes.formSubmitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
    <ContactUs />
    </>
  );
}
