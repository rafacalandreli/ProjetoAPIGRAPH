exports.TransferService = class TransferService {
    constructor(transferRepository) {
        this.transferRepository = transferRepository;
    }

    validateTransfer(amount, recipient, user) {
        if (amount > 5000 && !user.isFavoredRecipient(recipient)) {
            throw new Error("Transfers over R$ 5.000,00 can only be made to favored recipients.");
        }
        // Additional validation logic can be added here
        return true;
    }

    processTransfer(amount, recipient, user) {
        this.validateTransfer(amount, recipient, user);
        // Logic to process the transfer
        this.transferRepository.addTransfer({ amount, recipient, user });
        return { success: true, message: "Transfer successful." };
    }
};