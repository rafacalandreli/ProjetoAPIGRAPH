export class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async validateUser(username, password) {
        const user = await this.userRepository.findUser(username);
        if (!user) {
            throw new Error('User not found');
        }
        if (user.password !== password) {
            throw new Error('Invalid password');
        }
        return user;
    }

    async createUser(username, password) {
        const existingUser = await this.userRepository.findUser(username);
        if (existingUser) {
            throw new Error('User already exists');
        }
        const newUser = { username, password }; // In a real app, hash the password
        await this.userRepository.addUser(newUser);
        return newUser;
    }
}