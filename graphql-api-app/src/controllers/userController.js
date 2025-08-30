export class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getUsers(parent, args, context, info) {
        return await this.userService.fetchUsers();
    }
}