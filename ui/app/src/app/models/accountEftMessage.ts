import { AccountInfo } from './accountInfo';

export interface AccountEftMessage {
    transactionCode?: string;
    transactionSavingToken?: string;
    forceDuplicate?: boolean;
    expenseAmount?: number;
    sourceAccount?: AccountInfo;
    transactionDate?: string;
    accountingReference?: number;
    transactionId?: number;
    state?: number;
    creditInfoForConfirmations?: string;
    confirmationToken?: string;
    requiredConfirmationType?: number;
    mobilePhoneNumber?: string;
    canUserCommitTransaction?: boolean;
}
