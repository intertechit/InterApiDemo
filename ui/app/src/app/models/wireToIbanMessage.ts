import { AccountInfo } from './accountInfo';

export interface WireToIBANMessage {
    transactionCode?: string;
    transactionSavingToken?: any;
    forceDuplicate?: boolean;
    expenseAmount?: number;
    sourceAccount?: AccountInfo;
    transactionDate?: string;
    accountingReference?: number;
    transactionId?: number;
    state?: number;
    creditInfoForConfirmations?: any;
    confirmationToken?: any;
    requiredConfirmationType?: number;
    otp?: any;
    mobilePhoneNumber?: any;
    canUserCommitTransaction?: boolean;
}
