import classes from 'components/contact/contact-form.module.css';
import {
  NotificationContext,
  NOTIFICATION_STATUS,
} from 'context/notification-context';
import { useContext, useState } from 'react';

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong.');
  }
};

export const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const { showNotification } = useContext(NotificationContext);

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    setDisabled(true);

    showNotification({
      status: NOTIFICATION_STATUS.pending,
      title: 'Sending message...',
      message: 'Your message is on its way.',
    });

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      showNotification({
        status: NOTIFICATION_STATUS.success,
        title: 'Success!',
        message: 'Message send successfully!',
      });

      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');

      setDisabled(false);
    } catch (error) {
      showNotification({
        status: NOTIFICATION_STATUS.error,
        title: 'Error!',
        message: error.message,
      });
      setDisabled(false);
    }
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button type="submit" disabled={disabled}>
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};
