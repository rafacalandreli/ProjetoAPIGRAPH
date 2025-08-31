const userRepository = require('../repository/userRepository');

exports.transfer = (req, res) => {
  const { from, to, amount } = req.body;
  if (!from || !to || !amount) {
    return res.status(400).json({ message: 'From, to, and amount are required.' });
  }
  const sender = userRepository.findByUsername(from);
  const recipient = userRepository.findByUsername(to);
  if (!sender || !recipient) {
    return res.status(404).json({ message: 'Sender or recipient not found.' });
  }
  if (sender.saldo < amount) {
    return res.status(400).json({ message: 'Insufficient funds.' });
  }
  const isFavorecido = sender.favorecidos.includes(to);
  if (!isFavorecido && amount >= 5000) {
    return res.status(403).json({ message: 'Transfer above R$ 5.000,00 only allowed to favorecidos.' });
  }
  sender.saldo -= amount;
  recipient.saldo += amount;
  res.json({ message: 'Transfer successful.' });
};
