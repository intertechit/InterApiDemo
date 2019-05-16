import { AccountInfo } from './accountInfo';

export interface EftToIbanRequest {
    explanation?: string;
    IBANNo?: string;
    senderName?: string;
    destinationBankCode?: number;
    amount?: number;
    customerNo?: number;
    transactionDate?: string;
    sourceAccount?: AccountInfo;
    receiverName?: string;
}
