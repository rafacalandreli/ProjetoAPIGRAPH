class TransferController {
    constructor(transferService) {
        this.transferService = transferService;
    }

    async transferValue(req, res) {
        const { senderId, recipientId, amount } = req.body;

        try {
            const result = await this.transferService.validateTransfer(senderId, recipientId, amount);
            if (result.error) {
                return res.status(400).json({ error: result.error });
            }

            await this.transferService.processTransfer(senderId, recipientId, amount);
            return res.status(200).json({ message: 'Transfer successful' });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default TransferController;