const isInvalidInput = (email, name, message) => {
  return (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === ''
  );
};

export default (req, res) => {
  if (req.method !== 'POST') return;

  const { email, name, message } = req.body;

  if (isInvalidInput(email, name, message)) {
    res.status(422).json({ message: 'Invalid input.' });
    return;
  }

  const newMessage = { email, name, message };

  res.status(201).json({ message: 'Successfully stored message.' });
};
