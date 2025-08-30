export class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async fetchUsers() {
        return await this.userRepository.findAllUsers();
    }
}