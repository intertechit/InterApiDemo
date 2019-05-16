import { AccountInfo } from './accountInfo';

export interface EftToAccountRequest {
    explanation?: string;
    senderName?: string;
    transferReason?: string;
    destinationBankCode?: number;
    eftDestinationAccount?: number;
    destinationBranchCode?: number;
    eftDestinationType?: string;
    amount?: number;
    transactionDate?: string;
    customerNo?: number;
    sourceAccount?: AccountInfo;
    receiverName?: string;
}
