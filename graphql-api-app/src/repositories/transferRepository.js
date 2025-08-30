class TransferRepository {
    constructor() {
        this.transfers = [];
    }

    addTransfer(transfer) {
        this.transfers.push(transfer);
        return transfer;
    }

    getTransfers() {
        return this.transfers;
    }
}

export default TransferRepository;