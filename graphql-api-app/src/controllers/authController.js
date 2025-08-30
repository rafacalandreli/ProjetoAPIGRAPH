class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    async registerUser(req, res) {
        const { username, password } = req.body;
        try {
            const user = await this.authService.createUser(username, password);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async loginUser(req, res) {
        const { username, password } = req.body;
        try {
            const token = await this.authService.validateUser(username, password);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

export default AuthController;