class UserRepository {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    findUser(username) {
        return this.users.find(user => user.username === username);
    }

    getAllUsers() {
        return this.users;
    }
}

export default UserRepository;