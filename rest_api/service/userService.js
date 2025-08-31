const userRepository = require('../repository/userRepository');

exports.register = (req, res) => {
  const { username, password, favorecidos } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  if (userRepository.findByUsername(username)) {
    return res.status(409).json({ message: 'User already exists.' });
  }
  userRepository.create({ username, password, favorecidos: favorecidos || [], saldo: 10000 });
  res.status(201).json({ message: 'User registered successfully.' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  const user = userRepository.findByUsername(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }
  res.json({ message: 'Login successful.' });
};

exports.getAll = (req, res) => {
  const users = userRepository.getAll().map(u => ({ username: u.username, favorecidos: u.favorecidos, saldo: u.saldo }));
  res.json(users);
};
